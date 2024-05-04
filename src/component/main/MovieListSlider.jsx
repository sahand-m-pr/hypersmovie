import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard from "../movies/MoviesCard";



export default function MovieListSlider({ movies }) {
  return (
    <div className="container  max-w-5xl  mt-8">
      <Swiper
      breakpoints={{
        // when window width is >= 320px
        640: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 6,
          spaceBetween: 20
        }}}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        centeredSlides
      >
        {movies.map((img) => (
          <SwiperSlide key={img}>
       <MoviesCard img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
