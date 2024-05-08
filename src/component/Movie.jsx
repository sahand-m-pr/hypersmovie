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
  const { user, session } = useContext(UserContext);
  async function handleWatchlist() {
    const result = await axios.post(
      `${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: true,
      }
    );
toast.success(`${movie.title} has added to favorited`)
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
    <div className="justify-center items-center flex flex-col">
      {movie ? (
        <div className="flex gap-2 flex-col justify-center items-center">
          <h1>{movie.title}</h1>
          <img src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} />
          <button
            onClick={handleWatchlist}
            className="p-2  bg-green-600 rounded m-2"
          >
            add to watch list!
          </button>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
