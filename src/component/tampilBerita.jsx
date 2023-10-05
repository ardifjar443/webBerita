import { getLoading } from "../api";
import CardBerita from "./cardBerita";

const TampilBerita = (props) => {
  console.log(props);
  return (
    <>
      {" "}
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

export default TampilBerita;
