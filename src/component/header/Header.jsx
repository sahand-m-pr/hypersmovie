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
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 /80%),rgb(0 0 0/40%),rgb(0 0 0/70%),black),url(${bg})`,
      }}
    >
      <Navigation />
      <SearchBox />
      <FolowUs />
      <HeaderSlider setBg={setBg} />
    </header>
  );
}
