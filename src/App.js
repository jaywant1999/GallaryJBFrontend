import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallary from "./Pages/Gallary";
import Footer from "./Component/Footer";
import Upload from "./Pages/Upload";
import video from "./Component/1.mp4";
import { useEffect, useState } from "react";
import About from "./Pages/About";


function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthorized");
    if (auth === "true") {
      setIsAuthorized(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <BrowserRouter>
        <Navbar
          className="navbar"
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallary isAuthenticated={isAuthorized} />}/>
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </BrowserRouter>
     
      <div className="footer">
        <Footer />
      </div>

      <button className={`scroll-to-top ${showButton ? "" : "hidden"}`} onClick={scrollToTop}>
        <h2>↑</h2>
      </button>
    </div>
  );
}

export default App;
