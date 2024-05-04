import { useState } from "react";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <nav className="container max-w-5xl px-4 mx-auto  flex items-center text-slate-300 bg-slate-900 -mx-4 -my-6 md:bg-transparent md:m-0 p-0">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold  mr-20 ">
            Hypers<span className="text-rose-500">Movie</span>
            <p className="text-xs text-center text-slate-500">Film Review</p>
          </h1>
          <ul className="hidden md:flex text-sm lg:text-base gap-12 ml-3 items-center font-serif uppercase">
            <li>
              <a href="#">movies</a>
            </li>
            <li>
              <a href="#">tv show</a>
            </li>
            <li>
              <a href="#">people</a>
            </li>
            <li>
              <a href="#">more</a>
            </li>
          </ul>
        </div>
        <div className="ml-auto hidden md:block lg:text-base text-sm ">
          <ul className="flex gap-3 uppercase">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a
                className="bg-rose-700 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white"
                href="#"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={()=> setIsOpenMenu(!isOpenMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`md:hidden bg-slate-900 text-center  mt-4 overflow-hidden translate-all duration-300 text-slate-300 ${isOpenMenu ? ' h-64  border-slate-700 border-t-2 py-4' : 'h-1 py-0 border-none'}`}>
        <ul className="flex flex-col gap-3 ">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            {" "}
            <a href="#">Tv show</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            {" "}
            <a href="#">More</a>
          </li>
        </ul>
        <div className="mt-2 flex gap-4 justify-center border-t-2 py-4 border-slate-700 items-center">
          <a href="#" className="text-xl">LOGIN</a>
          <a href="#" className="bg-rose-700 hover:bg-rose-500 py-2 px-4  rounded-xl text-white">SIGN UP</a>
        </div>
      </div>
    </>
  );
}
