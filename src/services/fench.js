import axios from "axios";
const session_id = localStorage.getItem("session");
export const fench = axios.create({
  baseUrl: "https://api.themoviedb.org/3/",
  params: {
    apiKey: "da3cf9f38e32359f25ed2d097c96accf",
    ...(session_id && { session_id }),
  },
});

window.fench = fench;
