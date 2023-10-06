import CardBerita from "../component/cardBerita";
import React, { useEffect, useState } from "react";
import CarouselBerita from "../component/carousel";

import Sorting from "../component/sorting";
import Jumbtron from "../component/jumbotron";
import TampilBerita from "../component/tampilBerita";
import Pagination from "../component/pagination";
import { getBerita, getLoading, setNegara } from "../api";
import { data } from "autoprefixer";

const Berita = () => {
  const [dataBerita, setDataBerita] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBerita().then((result) => {
      console.log(result.data.length);
      setDataBerita(result.data);
      console.log(dataBerita);
    });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 6;
  const totalContent = dataBerita.length;
  const totalPages = Math.ceil(totalContent / contentPerPage);

  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContent = dataBerita.slice(
    indexOfFirstContent,
    indexOfLastContent
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log("DATA BERITA:" + dataBerita);
  return (
    <>
      <Jumbtron dataBerita={dataBerita} error={error} />
      {!getLoading() && (
        <>
          <div className="">{/* <CarouselBerita data={dataBerita} /> */}</div>
          <div id="berita">
            <Sorting />
          </div>
          <div>
            <TampilBerita dataBerita={currentContent} />
          </div>
          <div className="flex items-center justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Berita;
