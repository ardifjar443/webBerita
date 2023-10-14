import { useLocation, useParams } from "react-router-dom";
import { getBerita, getLoading, setSearch } from "../api";
import { useEffect, useState } from "react";
import TampilBerita from "../component/tampilBerita";
import Pagination from "../component/pagination";

const Search = () => {
  // const { cari } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const cari = searchParams.get("q");

  const [currentPage, setCurrentPage] = useState(1);
  const [currentContent, setCurrentContent] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getBerita().then((result) => {
      const filteredResults = result.data
        .filter(
          (item) =>
            item.title.toLowerCase().includes(cari.toLowerCase()) ||
            item.content.toLowerCase().includes(cari.toLowerCase()) ||
            item.deskripsi.toLowerCase().includes(cari.toLowerCase())
        )
        .slice(0, 3);
      if (filteredResults.length > 0) {
        const contentPerPage = 6;
        const totalContent = filteredResults.length;
        setTotalPages(Math.ceil(totalContent / contentPerPage));

        const indexOfLastContent = currentPage * contentPerPage;
        const indexOfFirstContent = indexOfLastContent - contentPerPage;
        setData(filteredResults.slice(indexOfFirstContent, indexOfLastContent));
      } else {
        setData("Tidak ada Data");
      }
    });
  }, [cari]);

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
                <div className="bg-primary w-full text-xl sm:text-xl  p-4 text-info rounded-lg flex justify-center">
                  <span className=" ">
                    Ada {data.length} Data untuk "{cari}"{" "}
                  </span>
                </div>
              </div>
              <div className="">
                <TampilBerita dataBerita={data} q={cari} />
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
