import { useEffect, useState } from "react";

import "./App.css";
import { getBerita } from "./api";
import Berita from "./component/berita";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./component/ArticleDetail";

function App() {
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    getBerita().then((result) => {
      const filteredBerita = result.filter(
        (item) => item.title !== "[Removed]"
      );
      setDataBerita(filteredBerita);
    });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Berita dataBerita={dataBerita} />} />
        <Route
          path="/article/:id"
          element={<ArticleDetail data={dataBerita} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
