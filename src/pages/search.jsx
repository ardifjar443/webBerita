import { useParams } from "react-router-dom";
import { getBerita, getLoading, setSearch } from "../api";
import { useEffect, useState } from "react";
import TampilBerita from "../component/tampilBerita";
import Pagination from "../component/pagination";

const Search = () => {
  const { cari } = useParams();
  const [data, setData] = useState([]);
  setSearch(cari);
  useEffect(() => {
    getBerita().then((result) => {
      setData(result);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 6;
  const totalContent = data.length;
  const totalPages = Math.ceil(totalContent / contentPerPage);

  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContent = data.slice(indexOfFirstContent, indexOfLastContent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          {data === "Tidak ada Data" ? (
            <>
              <div className=" min-h-screen flex items-center justify-center">
                <div className="bg-primary text-info p-10 rounded-lg text-3xl">
                  Tidak Ada Data untuk {cari}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="p-1"></div>
              <div className="mt-24 w-full p-10 ">
                <span className="text-3xl bg-primary p-4 text-info rounded-lg">
                  Ada {data.length} Data untuk "{cari}"{" "}
                </span>
              </div>
              <div className="">
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
      )}
    </>
  );
};

export default Search;
