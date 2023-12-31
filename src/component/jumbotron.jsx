import CarouselBerita from "./carousel";
import { getLoading } from "../api";
import React, { useState } from "react";
import CardBerita from "./cardBerita";
import { Link } from "react-router-dom";
import Notif from "./notif";
import Form from "./form";

const Jumbtron = (props) => {
  const [isNotif, setIsNotif] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    setFade(true);
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
      setFade(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setFade(true);
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
      setFade(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:lg-flex-col lg:flex-row p-4 min-h-screen ">
      <div className=" flex flex-col justify-center items-center m-20">
        {!isHovered ? (
          <div
            className={` bg-primary text-info p-5 rounded-lg animate__animated flex flex-col  justify-center  ${
              !fade ? "opacity-90  animate__rollIn " : "animate__rollOut"
            }`}
            onClick={handleMouseEnter}
            style={{ width: "300px", height: "200px", transition: "1s" }}
          >
            <div>
              <span
                className=" font-bold font-serif "
                style={{ fontSize: "40px" }}
              >
                ArdiFjar443
              </span>
            </div>
            <div className="text-end">
              {import.meta.env.MODE === "development" ? (
                <span
                  className=" font-bold font-serif"
                  style={{ fontSize: "20px" }}
                >
                  .{import.meta.env.MODE}
                </span>
              ) : (
                <span
                  className=" font-bold font-serif"
                  style={{ fontSize: "20px" }}
                >
                  .news
                </span>
              )}
            </div>
          </div>
        ) : (
          <div
            className={`bg-primary text-info p-5 rounded-lg animate__animated   ${
              fade ? " opacity-90 animate__rollOut  " : "animate__rollIn"
            }`}
            style={{ width: "300px", height: "200px", transition: "1s" }}
            onClick={handleMouseLeave}
          >
            <div>
              <span
                className=" font-bold font-serif"
                style={{ fontSize: "40px" }}
              >
                Ardi Fajar Arifin
              </span>
            </div>
            <div className="text-end">
              <span
                className=" font-bold font-serif"
                style={{ fontSize: "20px" }}
              >
                <div className=" flex justify-end">
                  <a
                    href="https://github.com/ardifjar443"
                    target="_blank"
                    className="hover:bg-info hover:text-primary p-2 rounded-full"
                  >
                    <svg
                      className="w-10 "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </span>
            </div>
          </div>
        )}
        <div>
          <div className="w-full flex justify-end  " style={{ width: "300px" }}>
            {" "}
            <svg
              className="h-10 w-10 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="17" y1="17" x2="7" y2="7" />{" "}
              <polyline points="7 17 7 7 17 7" />
            </svg>
            <div className="flex items-end font-bold text-lg">Click</div>
          </div>
        </div>
        <div>
          <div className="bg-primary text-info p-3 rounded-xl  border-8 border-red-600">
            <p>
              disclaimer berita yang ada disini itu ngambil dari source lain dan
              disini cuma dimanfaatkan untuk belajar saja.
            </p>
          </div>
        </div>
        <div className="mt-7">
          <button
            className="bg-primary text-info hover:bg-info hover:text-primary p-3 rounded-xl  border-8 border-blue-600 "
            onClick={() => {
              setIsNotif(true);
            }}
          >
            Jika Mendapatkan Error Click Tombol Ini
          </button>
        </div>
      </div>
      <div className="flex w-full p-10  items-center justify-center align-middle   ">
        {!getLoading() ? (
          <div className=" flex w-full  flex-col items-center justify-center   ">
            <div className="flex font-bold lg:justify-center ">
              <p className="text-lg">Click</p>
              <svg
                className="h-12 w-12 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="7" y1="7" x2="17" y2="17" />{" "}
                <polyline points="17 8 17 17 8 17" />
              </svg>
            </div>
            <div className="flex justify-center items-center h-full w-full  ">
              {/* <CarouselBerita data={props.dataBerita} /> */}
              <div className=" w-full ">
                <CardBerita data={props.dataBerita[0]} index={0} />
              </div>
            </div>
          </div>
        ) : (
          <div className=" w-full flex flex-col justify-center items-center gap-4   ">
            <span className="loading loading-dots loading-lg"></span>
            {props.error && (
              <>
                <span className="bg-primary text-info p-3 text-lg rounded-lg ">
                  API said :{" " + props.error}
                </span>
              </>
            )}
          </div>
        )}
      </div>
      {isNotif && (
        <Notif setIsNotif={setIsNotif} search={"form"} text={<Form />} />
      )}
    </div>
  );
};

export default Jumbtron;
