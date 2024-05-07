import Navigation from "./Navigashion";
import SearchBox from "./SearchBox";
import FolowUs from "./FolowUs";
import HeaderSlider from "./HeaSliderder";
import cinema from "../../assets/image/cinema.jpg";
import { useState } from "react";
export default function Header() {
  const [bg, setBg] = useState(cinema);
  return (
    <header
      className="md:py-12 py-6 transition bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 /100%),rgb(0 0 0/60%),rgb(0 0 0/30%),black),url(${bg})`,
      }}
    >
      <Navigation />
      <SearchBox />
      <FolowUs />
      <HeaderSlider setBg={setBg} />
    </header>
  );
}
