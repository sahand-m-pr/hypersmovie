import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard from "../movies/MoviesCard";
import { useEffect, useState } from "react";
import { fench } from "../../services/fench";
import axios from "axios";

export default function MovieListSlider({ type, activeTap }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios(`https://api.themoviedb.org/3/${type}/${activeTap}?api_key=da3cf9f38e32359f25ed2d097c96accf`);
   setMovies(data.results)
    })();
  }, [type, activeTap]);
  return (
    <div className="container  max-w-5xl  mt-8">
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        centeredSlides
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MoviesCard movie={movie} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
