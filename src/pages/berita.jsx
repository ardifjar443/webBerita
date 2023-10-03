import CardBerita from "../component/cardBerita";
import React, { useState } from "react";
import CarouselBerita from "../component/carousel";
import { getLoading } from "../api";
import Sorting from "../component/sorting";
import Jumbtron from "../component/jumbotron";

const Berita = (props) => {
  return (
    <>
      <Jumbtron dataBerita={props.dataBerita} />

      <Sorting />

      {!getLoading() && (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          {props.dataBerita.map((items, index) => (
            <div
              key={index}
              className=" rounded-t-3xl rounded-bl-3xl min-h-fit   transform transition duration-500 animate__backInLeft"
            >
              <CardBerita data={items} index={index} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Berita;
