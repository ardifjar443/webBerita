import { useEffect, useState } from "react";

import "./App.css";
import { getBerita } from "./api";
function App() {
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    getBerita().then((result) => {
      setDataBerita(result);
    });
  }, []);

  console.log(dataBerita);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" min-h-screen bg-red-100 flex justify-center items-center">
        <h1>Running in {import.meta.env.MODE}</h1>
      </div>
    </>
  );
}

export default App;
