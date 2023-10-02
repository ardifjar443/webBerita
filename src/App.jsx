import { useEffect, useState } from "react";

import "./App.css";
import { getBerita } from "./api";
import Berita from "./component/berita";
function App() {
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    getBerita().then((result) => {
      setDataBerita(result);
    });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" min-h-screen bg-red-100 flex flex-col justify-center items-center">
        <h1>Running in {import.meta.env.MODE}</h1>
        <Berita dataBerita={dataBerita} />
      </div>
    </>
  );
}

export default App;
