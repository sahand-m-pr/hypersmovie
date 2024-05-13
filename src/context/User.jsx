import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { fench } from "../services/fench";
const apiKey = "da3cf9f38e32359f25ed2d097c96accf";
const baseUrl = "https://api.themoviedb.org/3";

export const UserContext = createContext({ user: {}, session: "" });
export default function UserProvider({ children }) {
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const [favoriteMovie,setFavoriteMovie] = useState([]);
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const location = useLocation();
  async function getUserData() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/account?api_key=da3cf9f38e32359f25ed2d097c96accf"
    );
fetchFavoriteMovie(data.id)
   
    setUser(data);

  }

 async function fetchFavoriteMovie(id = user.id){
    const favResult = await axios.get(`https://api.themoviedb.org/3/account/${id}/favorite/movies?api_key=da3cf9f38e32359f25ed2d097c96accf`)
    setFavoriteMovie(favResult.data.results);
  }


  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      window.fench.defaults.params.session_id = session;
      getUserData();

      if (location.pathname === "/login") {
        Navigate("/profile", { replace: true });
      }
    }
  }, [session]);

  function logOut() {
    setUser({});
    setSession(null);
    localStorage.clear();
    delete window.fench.defaults.params.session_id;
  }

  async function login(username, password) {
    try {
      const resultToken = await axios.get(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=da3cf9f38e32359f25ed2d097c96accf"
      );
      const authorize = await axios.post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=da3cf9f38e32359f25ed2d097c96accf",
        {
          username,
          password,
          request_token: resultToken.data.request_token,
        }
      );
      const session = await axios.post(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=da3cf9f38e32359f25ed2d097c96accf",
        {
          request_token: resultToken.data.request_token,
        }
      );
      setSession(session.data.session_id);
    } catch {
      toast.error("invalid username or password");
    }
  }
  return (
    <UserContext.Provider value={{ user, login, session, logOut , favoriteMovie,fetchFavoriteMovie}}>
      {children}
    </UserContext.Provider>
  );
}
