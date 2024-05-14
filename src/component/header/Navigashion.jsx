import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/User";
import Login from "../pages/Login";
import Modal from '../modal';
import MoviesCard from "../movies/MoviesCard";
import FolowUs from "./FolowUs";

const menuItems = [
  {
    path: "/movies",
    text: "Movies",
  },
  {
    path: "/tv",
    text: "Tv Shows",
  },
  {
    path: "/people",
    text: "People",
  },
  {
    path: "/more",
    text: "More",
  },
];

export default function Navigation() {
  const [openModal, setopenModal] = useState(false);
  const { user, logOut } = useContext(UserContext);
  function activeClass({ isActive }) {
    return isActive ? "text-yellow-400" : "hover:text-white";
  }
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <nav className="container max-w-5xl px-4 mx-auto  flex items-center text-slate-300 bg-slate-900 -my-6 md:bg-transparent md:m-0 p-0">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl text-white hover:text-white font-semibold  mr-20 ">
              Hypers<span className="text-yellow-500">Movie</span>
              <p className="text-xs text-center text-slate-500">Film Review</p>
            </h1>
          </Link>
          <ul className="hidden md:flex text-sm lg:text-base gap-12 ml-3 items-center font-serif uppercase">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto hidden md:block lg:text-base text-sm ">
          {Object.keys(user).length ? (
            <div className="flex items-center text-white font-serif text-2xl gap-4">
              <>
               <h1> {user.name}</h1>

                <button
                  onClick={logOut}
                  className="bg-rose-800 text-lg text-yellow-400 rounded p-2"
                >
                  log Out
                </button>
              </>
            </div>
          ) : (
            <ul className="flex gap-3 uppercase">
              <li>
                <button
                  onClick={() => setopenModal(!openModal)}
                  className=" hover:text-slate-50 text-yellow-200"
                >
                  Login
                </button>
              </li>
              <li>
                <NavLink
                  className="bg-rose-700 hover:bg-rose-500 px-3 py-2 rounded-2xl text-white"
                  to="signup"
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fillRule="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden bg-slate-900 text-center  mt-4 overflow-hidden translate-all duration-300 text-slate-300 ${
          isOpenMenu
            ? " h-64  border-slate-700 border-t-2 py-4"
            : "h-1 py-0 border-none"
        }`}
      >
        <ul className="flex flex-col gap-3 ">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={activeClass}
                onClick={() => setIsOpenMenu(false)}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-2 flex gap-4 justify-center border-t-2 py-4 border-slate-700 items-center">
          <NavLink to="/login" className="text-xl">
            LOGIN
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-rose-700 hover:bg-rose-500 py-2 px-4  rounded-xl text-white"
          >
            SIGN UP
          </NavLink>
        </div>
      </div>
      <Modal open={openModal} setOpen={setopenModal}>
        <Login />
      </Modal>
    </>
  );
}
