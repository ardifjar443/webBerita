import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardBerita = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    if (isHovered) {
      setFade(true);
      hoverTimeout = setTimeout(() => {
        setIsHovered(false);
        setFade(false);
      }, 500);
    } else {
      setIsHovered(true);
    }
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
        className=" rounded-3xl bg-gray-200   bg-center bg-cover relative transition-transform transform  flex justify-center  p-5 animate__backInLeft "
        style={
          props.data.urlToImage && {
            backgroundImage: `url(${props.data.urlToImage}), url("https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png")`,
            transitionDuration: "0.5s",
          }
        }
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` flex  w-full    ${
            isHovered ? "flex-col  justify-center" : "flex-col-reverse "
          }`}
        >
          <div
            className={`transition-opacity relative transform animate__animated   ${
              !isHovered
                ? "opacity-80   "
                : fade
                ? " opacity-80 animate__flipOutY "
                : " opacity-80 animate__flipInY "
            } `}
            style={{ transitionDuration: "2.5s" }}
          >
            <div
              className="rounded-2xl bg-primary text-info   "
              style={{ transition: "1s" }}
            >
              <div className="p-4  ">
                <h1>{props.data.title}</h1>
              </div>

              <div className="p-3 ">
                <h2 className=" text-end font-semibold">
                  {formatDate(props.data.publishedAt)}
                </h2>
              </div>
            </div>
          </div>

          <div
            className={`  bg-primary p-5 lg:p-20 mt-2 rounded-xl relative animate__animated ${
              !isHovered
                ? "opacity-90 animate__flipOutX"
                : fade
                ? "opacity-90 animate__flipOutX"
                : "opacity-90 animate__flipInX"
            }`}
          >
            <div>
              <p className="text-info">description:</p>
              <p className="text-success">{props.data.description}</p>
            </div>
          </div>
          <div
            className={` opacity-90 flex bg-white mt-2 rounded-xl relative animate__animated ${
              !isHovered
                ? "animate__flipOutY"
                : fade
                ? "animate__flipOutY"
                : "animate__flipInY"
            }`}
          >
            <Link
              className="w-full rounded-xl text-white font-bold text-center p-2 lg:p-10 bg-[#ff8906] hover:bg-[#ff8b06ec] "
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
