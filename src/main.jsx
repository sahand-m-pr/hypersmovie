import ReactDOM from "react-dom/client";
import "swiper/css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import UserProvider from "./context/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
