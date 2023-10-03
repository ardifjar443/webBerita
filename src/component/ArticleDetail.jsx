import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = (props) => {
  const { id } = useParams();
  const article = props.data[id];
  console.log(article);

  return (
    <div>
      <h1>{article.title}</h1>
      <h1>{article.description}</h1>
      <p>{article.content}</p>
      {console.log(article.content)}
    </div>
  );
};

export default ArticleDetail;
