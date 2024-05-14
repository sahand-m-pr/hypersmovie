import { useState } from "react";
import MovieListSlider from "../main/MovieListSlider";
import Movies from "./Movies";
import { Helmet } from "react-helmet";
import Tittle from "../Tittle";

export default function Home() {
  const [movieActiveTap, setMovieActiveTap] = useState("now_playing");
  const [tvActiveTap, setTvActiveTap] = useState("airing_today");
  function HandlechangeActiveMovieTab(tab) {
    setMovieActiveTap(tab);
  }
  function ActiveClass(tab) {
    return tab === movieActiveTap ? "text-green-700 text-xl " : "";
  }
  function HandlechangeActiveTvTab(tab) {
    setTvActiveTap(tab);
  }
  function ActiveTVClass(tab) {
    return tab === tvActiveTap ? "text-green-700 text-xl " : "";
  }
  return (
    <div className="container max-w-5xl">
      <Tittle>
        Home
      </Tittle>
      <div className=" my-8  ">
        <div className="md:flex gap-6 items-center">
          <h2 className="text-slate-300 text-2xl"> movies </h2>
          <ul className="flex flex-col [&>li]:cursor-pointer  text-yellow-300 md:flex-row md:gap-6">
            <li
              className={ActiveClass("now_playing")}
              onClick={() => HandlechangeActiveMovieTab("now_playing")}
            >
              Now Playing{" "}
            </li>
            <li
              className={ActiveClass("popular")}
              onClick={() => HandlechangeActiveMovieTab("popular")}
            >
              Popular{" "}
            </li>
            <li
              className={ActiveClass("top_rated")}
              onClick={() => HandlechangeActiveMovieTab("top_rated")}
            >
              Top Rated
            </li>
            <li
              className={ActiveClass("upcoming")}
              onClick={() => HandlechangeActiveMovieTab("upcoming")}
            >
              Upcoming
            </li>
          </ul>
        </div>
        <MovieListSlider type="movie" activeTap={movieActiveTap} />
      </div>
      <div className=" my-8 ">
        <div className="md:flex gap-6 items-center">
          <h2 className="text-slate-300 text-2xl"> Tv </h2>
          <ul className="flex flex-col  [&>li]:cursor-pointer  text-yellow-300 md:flex-row md:gap-6">
            <li
              className={ActiveTVClass("airing_today")}
              onClick={() => HandlechangeActiveTvTab("airing_today")}
            >
              Airing Today{" "}
            </li>
            <li    className={ActiveTVClass("on_the_air")}
              onClick={() => HandlechangeActiveTvTab("on_the_air")}>On The Air </li>
            <li    className={ActiveTVClass("popular")}
              onClick={() => HandlechangeActiveTvTab("popular")}>Popular </li>
            <li    className={ActiveTVClass("top_rated")}
              onClick={() => HandlechangeActiveTvTab("top_rated")}>Top Rated </li>
          </ul>
        </div>
        <MovieListSlider type="tv" activeTap={tvActiveTap}/>
      </div>
    </div>
  );
}
