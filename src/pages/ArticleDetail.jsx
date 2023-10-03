import React from "react";
import { Link, useParams } from "react-router-dom";

const ArticleDetail = (props) => {
  const { id } = useParams();
  const article = props.data[id];
  console.log(article);
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
  return (
    <div className="p-5 ">
      <div className="m-5">
        <h1 className=" text-3xl font-bold">{article.title}</h1>
        <p>{formatDate(article.publishedAt)}</p>
        <p>source: {article.source.name}</p>
      </div>
      <div className=" flex items-center  justify-center m-4">
        <img src={article.urlToImage} alt="" className=" w-1/2 rounded-2xl" />
      </div>

      <div className="flex items-center justify-center ">
        <div className=" w-3/4">
          <p>{article.description}</p>
          <p className="mt-2">
            {article.content}{" "}
            <a
              href={article.url}
              target="_blank"
              className="bg-blue-200 p-1 rounded-md hover:bg-blue-300 "
            >
              Lihat Secara Lengkap
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Link
          className="bg-blue-200 hover:bg-blue-300 text-center p-3 w-3/4 rounded-xl"
          to={"/"}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
