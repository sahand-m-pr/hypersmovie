import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard from "../movies/MoviesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import cinema from "../../assets/image/cinema.jpg";


export default function HeaderSlider({ setBg }) {
  const [movie, setMovie] = useState([]);
  async function LoadMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=baffeb149b3599637d452cf8ddfc6fcb"
    );
    setMovie(data.results);
  }
  useEffect(() => {
    LoadMovies();
  }, []);
  return (
    <div className="container  max-w-5xl  mt-8">
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {movie.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div onMouseLeave={(e)=> setBg(cinema)} onMouseOver={(e) => setBg(`http://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)}>
         
            <MoviesCard 
            movie={movie}
            />
            </div>
            {/* <img
              onMouseOver={(e) => setBg(image)}
              className="w-full h-96 rounded"
              src={image}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
