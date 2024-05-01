import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
];

export default function HeaderSlider({setBg}) {
  return (
    <div className="container  max-w-5xl  mt-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
            onMouseOver={(e)=> setBg((image))}
              className="w-full h-96"
              src={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
