import { useState } from "react";

const CardBerita = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(props);
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
        className=" h-96 rounded-3xl bg-white bg-contain  bg-center hover:bg-cover transition-transform transform hover:scale-110 flex  "
        style={
          props.data.urlToImage && {
            backgroundImage: `url(${props.data.urlToImage}), url("https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png")`,
          }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={` flex  ${
            props.data.urlToImage && "items-end justify-center bg-red-400 "
          }`}
        >
          <div>
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
        </div>
      </div>
    </>
  );
};

export default CardBerita;
