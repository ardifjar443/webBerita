import { useEffect, useState } from "react";

import "./App.css";
import { getBerita } from "./api";
import Berita from "./pages/berita";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./pages/ArticleDetail";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import ScrollButton from "./component/scrollButton";

function App() {
  const [tema, setTema] = useState("myLight");
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    getBerita().then((result) => {
      const filteredBerita = result.filter(
        (item) => item.title !== "[Removed]"
      );
      setDataBerita(filteredBerita);
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  let iconLight = "bi bi-sun-fill ";
  let iconDark = "bi bi-moon-fill  ";
  const [itema, setItema] = useState(tema === "myLight" ? iconLight : iconDark);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div data-theme={tema} style={{ transition: "1s" }}>
      <ScrollButton
        isVisible={isVisible}
        scrollToTop={scrollToTop}
        tema={tema}
        setTema={setTema}
        itema={itema}
        setItema={setItema}
        iconDark={iconDark}
        iconLight={iconLight}
      />

      <Navbar
        isVisible={isVisible}
        tema={tema}
        setTema={setTema}
        itema={itema}
        setItema={setItema}
        iconDark={iconDark}
        iconLight={iconLight}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Berita dataBerita={dataBerita} />} />
          <Route
            path="/article/:id"
            element={<ArticleDetail data={dataBerita} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
