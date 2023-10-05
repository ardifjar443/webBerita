import { Link, useParams } from "react-router-dom";
import { article, setNegara } from "../api";
import { useEffect, useState } from "react";

const Article = (props) => {
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  const [title, setTitle] = useState("");
  const [publis, setPublis] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    article(id).then((result) => {
      if (result !== "gagal") {
        setTitle(result.title);
        setPublis(result.publishedAt);
        setSource(result.source.name);
        setImg(result.urlToImage);
        setDeskripsi(result.description);
        setContent(result.content);
      }
    });
  }, []);

  return (
    <>
      {title !== "" ? (
        <>
          <div className=" min-h-screen flex items-center justify-center ">
            <div className=" w-full mx-10 mt-24">
              <div>
                <h1 className=" text-xl font-bold">{title}</h1>
                <p className="text-lg">{formatDate(publis)}</p>
                <p>source: {source}</p>
              </div>
              <div className="w-full flex  justify-center mt-10 ">
                <div className="w-3/4 flex flex-col gap-4">
                  <div className="flex justify-center">
                    <img src={img} alt="image" className="w-3/4" />
                  </div>
                  <span>{deskripsi}</span>
                  <span>{content}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center ">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      )}
      <div className="flex justify-center p-20 ">
        <Link
          to={`/`}
          onClick={() => {
            scrollToTop();
          }}
          className="bg-primary text-info hover:bg-info hover:text-primary p-3 text-xl rounded-lg"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default Article;
