import CarouselBerita from "./carousel";
import { getLoading } from "../api";
import React, { useState } from "react";
import CardBerita from "./cardBerita";

const Jumbtron = (props) => {
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
    <div className="flex flex-col md:lg-flex-col lg:flex-row p-4 min-h-screen">
      <div className=" flex flex-col justify-center items-center ">
        {!isHovered ? (
          <div
            className={`bg-black text-white p-5 rounded-lg animate__animated flex flex-col  justify-center  ${
              !fade ? "opacity-90  animate__rollIn " : "animate__rollOut"
            }`}
            onClick={handleMouseEnter}
            style={{ width: "300px", height: "200px" }}
          >
            <div>
              <span
                className=" font-bold font-serif"
                style={{ fontSize: "40px" }}
              >
                ArdiFjar443
              </span>
            </div>
            <div className="text-end">
              <span
                className=" font-bold font-serif"
                style={{ fontSize: "20px" }}
              >
                .news
              </span>
            </div>
          </div>
        ) : (
          <div
            className={`bg-black text-white p-5 rounded-lg animate__animated   ${
              fade ? " opacity-90 animate__rollOut  " : "animate__rollIn"
            }`}
            style={{ width: "300px", height: "200px" }}
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
                    className="hover:bg-white hover:text-black p-2 rounded-full"
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
      </div>
      <div className="flex w-full items-center justify-center align-middle   ">
        {!getLoading() ? (
          <div className="h-3/4   ">
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
            <div className=" h-full flex px-20">
              {/* <CarouselBerita data={props.dataBerita} /> */}
              <CardBerita data={props.dataBerita[0]} />
            </div>
          </div>
        ) : (
          <div className=" w-full flex justify-center   ">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jumbtron;
