import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import toast from "react-hot-toast";
const apiKey = "da3cf9f38e32359f25ed2d097c96accf";
const baseUrl = "https://api.themoviedb.org/3";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { user, session, favoriteMovie ,fetchFavoriteMovie} = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (movie && favoriteMovie.length) {
      const favMovie = favoriteMovie.find((f) => f.id === movie?.id);
      setIsFavorite(Boolean(favMovie));
    }
  }, [movie, favoriteMovie]);

  async function handleFavorite() {
if(session){
  const result = await axios.post(
    `${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
    {
      media_type: "movie",
      media_id: movie.id,
      favorite: !isFavorite,
    }
  );
  fetchFavoriteMovie();
  toast.success(`${movie.title} ${isFavorite ?'removed from' :'added to'}  favorited`);
}else{
  console.log("error");
}
  }
  async function LoadMovie() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    console.log(data);
    setMovie(data);
  }
  useEffect(() => {
    LoadMovie();
  }, [id]);
  return (
    <div>
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
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
