import Navigation from "./Navigashion";
import SearchBox from "./SearchBox";
import FolowUs from "./FolowUs";
import HeaderSlider from "./HeaSliderder";
import cinema from "../../assets/image/cinema.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Header() {
  const Location = useLocation();
  const [bg, setBg] = useState(cinema);
  return (
    <header
      className={`md:py-12 py-6 transition bg-cover bg-no-repeat bg-center ${location.pathname !== '/'  ? 'h-[500px]' : ''}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 /100%),rgb(0 0 0/60%),rgb(0 0 0/30%),black),url(${bg})`,
      }}
    >
      <Navigation />
      <SearchBox />
    
      <div className={`${location.pathname!=='/' ? 'hidden' : ''}`}>
        <FolowUs />
      <HeaderSlider setBg={setBg} />
      </div>
   
    </header>
  );
}
