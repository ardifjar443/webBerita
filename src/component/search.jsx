import { useEffect, useState } from "react";
import { getBerita } from "../api";
import { Link, useNavigate } from "react-router-dom";

const SearchEngine = (props) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    getBerita().then((result) => {
      setData(result.data);
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      event.preventDefault();
      navigate(`/search?q=${query}`);
      props.setIsNotif(false);
      scrollToTop();
    }
  };

  const Filter = (e) => {
    setLoading1(true);
    const filteredResults = data
      .filter(
        (item) =>
          item.title.toLowerCase().includes(e.toLowerCase()) ||
          item.content.toLowerCase().includes(e.toLowerCase()) ||
          item.deskripsi.toLowerCase().includes(e.toLowerCase())
      )
      .slice(0, 3);
    setLoading1(false);
    setSearch(filteredResults);
  };

  return (
    <>
      <div className=" min-w-full ">
        {" "}
        <div className="flex flex-col gap-2 ">
          <input
            type="text"
            placeholder="Cari Sesuatu"
            className="input w-full border-2 border-primary text-center "
            onChange={(e) => {
              Filter(e.target.value);
              setQuery(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <div></div>
          {search &&
            (loading1 ? (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <>
                <div>
                  <ul className="list-disc flex flex-col gap-1 w-full m-2 ">
                    {search.map((data, index) => (
                      <li className="w-full  ">
                        <Link
                          key={index}
                          className="border-2 p-2 hover:bg-primary hover:text-info rounded-lg w-full min-w-full flex  animate__animated animate__bounceIn "
                          to={`/article/${data.id}?q=${query}`}
                          onClick={() => {
                            props.setIsNotif(false);
                            scrollToTop();
                          }}
                        >
                          {data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          {search.length === 0 && (
            <Link
              className="bg-primary w-full text-info hover:bg-info hover:text-primary p-2 rounded-md text-center border-2 border-primary"
              to={`/search?q=${query}`}
              onClick={() => {
                props.setIsNotif(false);
                scrollToTop();
              }}
            >
              Search
            </Link>
          )}

          {search.length > 2 && query !== "" && (
            <Link
              className="bg-primary text-info hover:bg-info hover:text-primary p-2 rounded-lg border-2 border-primary animate__animated animate__bounceIn text-center "
              to={`/search?q=${query}`}
              onClick={() => {
                props.setIsNotif(false);
                scrollToTop();
              }}
            >
              Lihat Semua Tentang {query}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchEngine;
