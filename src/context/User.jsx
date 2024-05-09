import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fench } from "../services/fench";
const apiKey = "da3cf9f38e32359f25ed2d097c96accf";
const baseUrl = "https://api.themoviedb.org/3";

export const UserContext = createContext({user :{}, session :""});
export default function UserProvider({ children }) {
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  async function getUserData() {
    const { data } = await fench.get(`account`);
    setUser(data);
  }
  useEffect(() => {
    if (session) {
      getUserData();
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
      const resultToken = await fench.get(
        `${baseUrl}/authentication/token/new`
      );
      const authorize = await fench.post(
        `${baseUrl}/authentication/token/validate_with_login`,
        {
          username,
          password,
          request_token: resultToken.data.request_token,
        }
      );
      const session = await fench.post(
        `${baseUrl}/authentication/session/new`,
        {
          request_token: resultToken.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      window.fench.defaults.params.session_id = session.data.session_id;
      Navigate("/", {
        replace: true,
      });
    } catch {
      toast.error("invalid username or password");
    }
  }
  return (
    <UserContext.Provider value={{ user, login, session, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
