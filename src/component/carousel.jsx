import { Carousel, IconButton } from "@material-tailwind/react";
import CardBerita from "./cardBerita";

const CarouselBerita = (props) => {
  const dataBerita = [];

  if (props.data.length !== 0) {
    while (dataBerita.length < 3) {
      const randomIndex = Math.floor(Math.random() * props.data.length);
      if (!dataBerita.includes(randomIndex)) {
        dataBerita.push(randomIndex);
      }
    }
  }

  return (
    <>
      <Carousel
        className="rounded-xl flex items-center "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black text-white hover:bg-white hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black text-white hover:bg-white hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray-800"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {dataBerita.map((data, index) => (
          <div key={index} className="p-10">
            <CardBerita data={props.data[data]} index={data} />
          </div>
        ))}
        <div className="flex justify-center items-center align-middle  h-96 m-10">
          <div className="bg-black min-h-fit text-white p-10 rounded-2xl text-3xl w-1/2 flex flex-col justify-end items-end">
            <p className=" w-full font-bold">Lihat Berita</p>
            <p className=" w-full text-center font-bold">Lebih Lengkap</p>
            <a
              className="bg-white text-black text-center rounded-lg hover:bg-gray-500 p-1 w-1/4"
              href="#berita"
            >
              Lihat
            </a>
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default CarouselBerita;
