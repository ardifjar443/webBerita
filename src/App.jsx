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
      <div className=" min-h-screen bg-gray-300 flex flex-col justify-center items-center">
        <Berita dataBerita={dataBerita} />
      </div>
    </>
  );
}

export default App;
