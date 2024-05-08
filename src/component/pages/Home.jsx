import MovieListSlider from "../main/MovieListSlider";
// const movies = [
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
//   "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
//   "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
//   "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
//   "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
//   "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384234-xugedwhwrj-portrait.jpg",
// ];
export default function Home() {
    return (
   <div className="container max-w-5xl">
         <div className=" my-8  ">
        <div className="md:flex gap-6 items-center">
          <h2 className="text-slate-300 text-2xl"> what's popular </h2>
          <ul className="flex flex-col   text-yellow-300 md:flex-row md:gap-6" >
            <li>streaming </li>
            <li>onTv </li>
            <li>ForRent </li>
            <li>in Theaters</li>
          </ul>
        </div>
        {/* <MovieListSlider movies={movies} /> */}
      </div>
      <div className=" my-8 ">
        <div className="md:flex gap-6 items-center">
          <h2 className="text-slate-300 text-2xl"> free to watch </h2>
          <ul className="flex flex-col   text-yellow-300 md:flex-row md:gap-6" >
            <li>Movie </li>
            <li>Tv </li>
          
          </ul>
        </div>
        {/* <MovieListSlider movies={movies} /> */}
      </div>
   </div>
    );
  }
  