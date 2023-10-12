import { useEffect, useState } from "react";

import "./App.css";
import { getBerita, setNegara, setSearch } from "./api";
import Berita from "./pages/berita";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import ScrollButton from "./component/scrollButton";
import Article from "./pages/article";
import Search from "./pages/search";
import Upload from "./pages/uploadBerita";

function App() {
  const [dataBerita, setDataBerita] = useState([]);
  const [error, setError] = useState(null);
  const [isHtml, setIsHtml] = useState(false);
  const [html, setHtml] = useState("");
  useEffect(() => {
    getBerita().then((result) => {
      if (result.type === "html") {
        setIsHtml(true);
        console.log(result);
        setHtml(result.data);
      } else {
        setIsHtml(false);
        if (result.code !== "ERR_BAD_REQUEST") {
          if (result.data === "tidak ada data") {
            console.log(result.data);
            setError(result.data);
          } else {
            setDataBerita(result.data.reverse());
          }
        } else {
          setError(result);
        }
      }
    });
  }, []);
  const [tema, setTema] = useState("myLight");
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

  const [cari, setCari] = useState("");

  return (
    <div data-theme={tema} style={{ transition: "1s" }}>
      {!isHtml && (
        <>
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
            cari={cari}
            setCari={setCari}
          />
        </>
      )}
      <BrowserRouter>
        <Routes>
          {isHtml ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                  </>
                }
              />
            </>
          ) : (
            <Route
              path="/"
              element={<Berita dataBerita={dataBerita} error={error} />}
            />
          )}
          <Route path="/article/:id" element={<Article />} />
          <Route path="/search/:cari" element={<Search />} />
          <Route path="/upload" element={<Upload />}></Route>
        </Routes>
      </BrowserRouter>
      {!isHtml && <Footer />}
    </div>
  );
}

export default App;
