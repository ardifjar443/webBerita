import { useEffect, useState } from "react";
// import { getLoading } from "../api";
import CardBerita from "./cardBerita";

const TampilBerita = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(props.dataBerita);
  }, [props.dataBerita]);

  return (
    <>
      {" "}
      {data ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          {data.map((items, index) => (
            <div
              key={index}
              className=" rounded-t-3xl rounded-bl-3xl min-h-fit   transform transition duration-500 animate__backInLeft"
            >
              <CardBerita data={items} index={index} q={props.q} />
            </div>
          ))}
        </div>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default TampilBerita;
