import CardBerita from "./cardBerita";
import React from "react";
const Berita = (props) => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5 ">
        {props.dataBerita.map((items, index) => (
          <div
            key={index}
            className=" rounded-t-3xl rounded-bl-3xl min-h-fit   transform transition duration-500 m-5 animate__backInLeft "
          >
            <CardBerita data={items} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Berita;
