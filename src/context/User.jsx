import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
 async function login(username, password) {
    const resultToken=await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=baffeb149b3599637d452cf8ddfc6fcb')
    console.log(resultToken.data);
  }
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}
