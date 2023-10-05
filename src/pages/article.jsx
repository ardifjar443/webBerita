import { Link, useParams } from "react-router-dom";
import { article } from "../api";
import { useEffect, useState } from "react";

const Article = (props) => {
  const { id } = useParams();

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
      <div className=" min-h-screen flex items-center justify-center ">
        <div className=" w-full mx-10 mt-24">
          <div>
            <h1 className=" text-xl font-bold">{title}</h1>
            <p className="text-lg">{formatDate(publis)}</p>
            <p>source: {source}</p>
          </div>
          <div className="w-full flex  justify-center mt-10 ">
            <div className="w-3/4 flex flex-col gap-4">
              <div>
                <img src={img} alt="image" className="w-3/4" />
              </div>
              <span>{deskripsi}</span>
              <span>{content}</span>
              <div className=" ">
                <Link to={`/`}>Search</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
