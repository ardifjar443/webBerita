import CardBerita from "../component/cardBerita";
import React, { useEffect, useState } from "react";
import CarouselBerita from "../component/carousel";

import Sorting from "../component/sorting";
import Jumbtron from "../component/jumbotron";
import TampilBerita from "../component/tampilBerita";
import Pagination from "../component/pagination";
import { getBerita, getLoading, setNegara } from "../api";
import { data } from "autoprefixer";

const Berita = (props) => {
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 6;
  const totalContent = props.dataBerita.length;
  const totalPages = Math.ceil(totalContent / contentPerPage);

  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContent = props.dataBerita.slice(
    indexOfFirstContent,
    indexOfLastContent
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Jumbtron dataBerita={props.dataBerita} error={error} />
      {!getLoading() && (
        <>
          <div className="">
            <CarouselBerita data={props.dataBerita} />
          </div>
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
