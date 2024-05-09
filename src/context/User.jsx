import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const apiKey = "da3cf9f38e32359f25ed2d097c96accf";
const baseUrl = "https://api.themoviedb.org/3";

export const UserContext = createContext({});
export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  async function getUserData() {
    const userResult = await axios.get(
      `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`
    );
    setUser(data);
  }
  useEffect(() => {
    if (session) {
      getUserData();
    }
  }, [session]);

  async function login(username, password) {
    try {
      const resultToken = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${apiKey}`
      );
      const authorize = await axios.post(
        `${baseUrl}/authentication/token/validate_with_login?api_kay=${apiKey}
`,
        {
          username,
          password,
          request_token: resultToken.data.request_token,
        }
      );
      const session = await axios.post(
        `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: resultToken.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
    } catch {
      toast.error("invalid username or password");
    }
  }
  return (
    <UserContext.Provider value={{ user, login, session }}>
      {children}
    </UserContext.Provider>
  );
}
