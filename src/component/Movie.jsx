import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  async function LoadMovie() {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=baffeb149b3599637d452cf8ddfc6fcb`
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
<div>
    <h1>{movie.title}</h1>
    <img  src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}  />
</div>
     ) : (
        <h1>loading...</h1>
     )}
    </div>
  );
}
