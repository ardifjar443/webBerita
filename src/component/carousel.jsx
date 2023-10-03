import { Carousel } from "@material-tailwind/react";
import CardBerita from "./cardBerita";

const CarouselBerita = (props) => {
  const dataBerita = [];
  while (dataBerita.length < 3) {
    const randomIndex = Math.floor(Math.random() * dataBerita.length);
    if (!dataBerita.includes(randomIndex)) {
      dataBerita.push(randomIndex);
    }
  }
  console.log(dataBerita);
  return (
    <>
      <Carousel className="rounded-xl ">
        {dataBerita.map((data, index) => (
          <>
            <div>
              <CardBerita data={data} />
            </div>
          </>
        ))}
      </Carousel>
    </>
  );
};
export default CarouselBerita;
