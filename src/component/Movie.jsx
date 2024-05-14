import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import toast from "react-hot-toast";
import { UseMovieDb } from "../Hooks/UseMOvieDb";
const apiKey = "da3cf9f38e32359f25ed2d097c96accf";
const baseUrl = "https://api.themoviedb.org/3";
import {Helmet} from 'react-helmet';
import Tittle from "./Tittle";

export default function Movie() {
  const { id } = useParams();
  
  
  const [movie, setMovie] = useState(null);
  const { user, session, favoriteMovie, fetchFavoriteMovie } =
    useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (movie && favoriteMovie.length) {
      const favMovie = favoriteMovie.find((f) => f.id === movie?.id);
      setIsFavorite(Boolean(favMovie));
    }
  }, [movie, favoriteMovie]);

  async function handleFavorite() {
    if (session) {
      const result = await axios.post(
        `${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: !isFavorite,
        }
      );
      fetchFavoriteMovie();
      toast.success(
        `${movie.title} ${isFavorite ? "removed from" : "added to"}  favorited`
      );
    } else {
      console.log("error");
    }
  }
  async function LoadMovie() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    setMovie(data);
  }
  async function ratingChanged(rate) {
    const rating = await axios.post(
      `https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=${apiKey}`,{value :rate*2}
    );
    toast.success('your vote is submited')
  }
  useEffect(() => {
    LoadMovie();
  }, [id]);
  return (
    <div>
      <Tittle>
        {movie?.title || 'loading....'}
      </Tittle>
      {movie ? (
        <div className="container mt-10 mb-10 grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <img
              className="w-96"
              src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            />
          </div>
          <div className="col-span-3">
            <div className="flex gap-3 items-center">
              <h1 className="text-3xl text-yellow-600 ">{movie.title}</h1>
              <time className="text-slate-500">
                {movie.release_date.split("-")[0]}
              </time>
            </div>
            <div className="flex gap-2 mt-8">
              <button
                onClick={handleFavorite}
                className="p-2 flex items-center gap-2 bg-green-600 rounded m-2"
              >
                <span>
                  {isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  )}
                </span>
                {!isFavorite ? "Add to favorite" : "remove from favorite"}
              </button>

              <button className="p-2 flex items-center gap-2  bg-yellow-600 rounded m-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                  </svg>
                </span>{" "}
                share
              </button>
            </div>
            <div className="grid grid-cols-4 mt-3 border-slate-700 w-[70%] border-t-2 border-b-2">
              <div className="col-span-1 flex items-center gap-4 border-slate-700 border-r-2">
                <div className="flex items-center">
                  {" "}
                  <div>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>{parseInt(movie.vote_average)}/10 </div>
                  <div className="text-green-600">{movie.vote_count} reviews </div>
                </div>
              </div>
              <div className="col-span-3 flex items-center gap-4 pl-4 p-2">
                <p>Rate this Movie :</p>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    value={parseInt(movie.vote_average)/2}
                    size={24}
                    isHalf={false}
                    emptyIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg>
                    }
                    filledIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    }
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
