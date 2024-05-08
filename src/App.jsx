import { Outlet } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import MoviesCard from "./component/movies/MoviesCard";


function App() {
  return (
    <div className=" min-h-[100vh]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer/>
      
    </div>
  );
}

export default App;
