import CardBerita from "./cardBerita";
import React from "react";
const Berita = (props) => {
  return (
    <>
      <div>Berita</div>
      <div className=" grid grid-cols-2 gap-4 p-10">
        {props.dataBerita.map((items, index) => (
          <div
            key={index}
            className=" rounded-t-3xl rounded-bl-3xl min-h-fit   transform transition duration-500 m-5 "
          >
            <CardBerita data={items} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Berita;
