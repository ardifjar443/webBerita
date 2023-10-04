import React, { useState, useEffect } from "react";

const ScrollButton = (props) => {
  return (
    <div className="">
      {props.isVisible ? (
        <div className="scroll-button flex flex-col gap-2 items-end">
          <div className="animate__animated  animate__bounceIn">
            <button
              className="  text-info hover:text-primary-focus bg-primary p-3 hover:bg-info rounded-full w-10 h-10 flex items-center"
              onClick={() => {
                if (props.tema === "myLight") {
                  props.setItema(props.iconLight + "animate__rotateOut");
                  setTimeout(() => {
                    props.setItema(props.iconDark + "animate__rotateIn");
                    props.setTema("myDark");
                  }, 100);
                } else {
                  props.setItema(props.iconDark + "animate__rotateOut");
                  setTimeout(() => {
                    props.setItema(props.iconLight + "animate__rotateIn");
                    props.setTema("myLight");
                  }, 100);
                }
              }}
            >
              <i className={`animate__animated ${props.itema}`}></i>
            </button>
          </div>
          <button
            onClick={props.scrollToTop}
            className="bg-[#ff8906] p-2 text-black w-10 h-10 font-bold hover:bg-[#c6781f] rounded-xl animate__animated animate__bounceIn"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      ) : (
        <div className="scroll-button flex flex-col gap-2 items-end">
          <div className="animate__animated  animate__bounceOut">
            <button
              className="  text-info hover:text-primary-focus bg-primary p-3 hover:bg-info rounded-full w-10 h-10 flex items-center"
              onClick={() => {
                if (props.tema === "myLight") {
                  props.setItema(props.iconLight + "animate__rotateOut");
                  setTimeout(() => {
                    props.setItema(props.iconDark + "animate__rotateIn");
                    props.setTema("myDark");
                  }, 100);
                } else {
                  props.setItema(props.iconDark + "animate__rotateOut");
                  setTimeout(() => {
                    props.setItema(props.iconLight + "animate__rotateIn");
                    props.setTema("myLight");
                  }, 100);
                }
              }}
            >
              <i className={`animate__animated ${props.itema}`}></i>
            </button>
          </div>
          <button
            onClick={props.scrollToTop}
            className="bg-[#ff8906] p-2 text-black w-10 h-10 font-bold hover:bg-[#c6781f] rounded-xl animate__animated animate__bounceOut"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
