import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardBerita = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setFade(true);
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
      setFade(false);
    }, 500);
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
  return (
    <>
      <div
        className=" rounded-3xl bg-gray-200 bg-contain  bg-center hover:bg-cover relative transition-transform transform  hover:scale-110 flex p-5 animate__backInLeft "
        style={
          props.data.urlToImage && {
            backgroundImage: `url(${props.data.urlToImage}), url("https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png")`,
            transitionDuration: "0.5s",
          }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` flex  w-full  ${
            isHovered ? "flex-col " : "flex-col-reverse "
          }`}
        >
          <div
            className={`transition-opacity relative transform animate__animated   ${
              !isHovered
                ? "opacity-100 animate__flipInX  "
                : fade
                ? " opacity-90 animate__flipOutY "
                : " opacity-90 animate__flipInY "
            } `}
            style={{ transitionDuration: "2.5s" }}
          >
            <div className="rounded-2xl bg-white     ">
              <div className="p-4  ">
                <h1>{props.data.title}</h1>
              </div>

              <div className="p-3 ">
                <h2 className=" text-end">
                  {formatDate(props.data.publishedAt)}
                </h2>
              </div>
            </div>
          </div>

          <div
            className={` bg-white p-4 mt-2 rounded-xl relative animate__animated ${
              !isHovered
                ? "animate__flipOutX"
                : fade
                ? "animate__flipOutX"
                : "animate__flipInX"
            }`}
          >
            <div>
              <p>description:</p>
              <p className="text-black">{props.data.description}</p>
            </div>
          </div>
          <div
            className={` flex bg-white mt-2 rounded-xl relative animate__animated ${
              !isHovered
                ? "animate__flipOutY"
                : fade
                ? "animate__flipOutY"
                : "animate__flipInY"
            }`}
          >
            <Link
              className="w-full rounded-xl text-white font-bold text-center  p-2 bg-blue-500 hover:bg-blue-600"
              to={`/article/${props.index}`}
            >
              View News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBerita;
