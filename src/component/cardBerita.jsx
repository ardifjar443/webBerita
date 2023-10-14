import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardBerita = (props) => {
  // console.log(props.q === undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  let hoverTimeout;
  const id = props.data.title.split(" ").slice(0, 8).join("-");
  const [startTime] = useState(new Date(props.data.updated_at));
  const [elapsedTime, setElapsedTime] = useState(null);
  const [title, setTitle] = useState(null);
  const [deskripsi, setDeskripsi] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = Math.floor((currentTime - startTime) / 1000); // Perbedaan waktu dalam detik
      setElapsedTime(difference);
    }, 1000); // Update setiap detik
    if (props.q !== undefined) {
      const title = props.data.title.split(" ");
      const titleAkhir = title.map((data) => {
        if (data.toLowerCase().includes(props.q.toLowerCase())) {
          return `<span class="text-amber-500">${data}</span>`;
        } else {
          return data;
        }
      });
      setTitle(titleAkhir.join(" "));
      const deskripsi = props.data.deskripsi.split(" ");
      const deskripsiAkhir = deskripsi.map((data) => {
        if (data.toLowerCase().includes(props.q.toLowerCase())) {
          return `<span class="text-amber-500">${data}</span>`;
        } else {
          return data;
        }
      });
      setDeskripsi(deskripsiAkhir.join(" "));
    }

    return () => clearInterval(interval); // Bersihkan interval saat komponen tidak lagi ter-render
  }, [startTime]);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseLeave = () => {
    setFade(true);
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
      setFade(false);
    }, 500);
  };

  return (
    <>
      <div
        className=" rounded-3xl bg-gray-200   bg-center bg-cover relative transition-transform transform  flex justify-center  p-5 animate__backInLeft "
        style={
          props.data.foto && {
            backgroundImage: `url(${
              import.meta.env.VITE_BASE_URL + props.data.foto
            })`,
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
              className={`rounded-2xl bg-primary text-info animate__animated ${
                !isHovered && "animate__flipInY"
              }   `}
              style={{ transition: "1s" }}
            >
              <div className="p-4  ">
                <h1>
                  {props.q !== undefined ? (
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  ) : (
                    props.data.title
                  )}
                </h1>
              </div>

              <div className="p-3 ">
                {elapsedTime !== null && (
                  <div>
                    {Math.floor(elapsedTime / (3600 * 24)) !== 0 ? (
                      <h2 className="text-end font-semibold">
                        {Math.floor(elapsedTime / (3600 * 24))} hari lalu
                      </h2>
                    ) : Math.floor(elapsedTime / 3600) !== 0 ? (
                      <h2 className="text-end font-semibold">
                        {Math.floor(elapsedTime / 3600)} jam lalu
                      </h2>
                    ) : Math.floor(elapsedTime / 60) !== 0 ? (
                      <h2 className="text-end font-semibold">
                        {Math.floor(elapsedTime / 60)} menit lalu
                      </h2>
                    ) : (
                      <h2 className="text-end font-semibold">
                        {elapsedTime} detik lalu
                      </h2>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`  bg-primary p-5 lg:p-20 mt-2 rounded-xl relative animate__animated ${
              !isHovered
                ? "animate__flipOutY"
                : fade
                ? "opacity-90 animate__flipOutY"
                : "opacity-90 animate__flipInY"
            }`}
          >
            <div>
              <p className="text-info">description:</p>
              <p className="text-success">
                {" "}
                {props.q !== undefined ? (
                  <span
                    className=""
                    dangerouslySetInnerHTML={{ __html: deskripsi }}
                  />
                ) : (
                  props.data.deskripsi
                )}
              </p>
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
              to={`/article/${props.data.id}/${props.q}`}
              onClick={scrollToTop}
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
