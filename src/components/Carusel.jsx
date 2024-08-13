import React from "react";
import { Carousel } from "flowbite-react";
import { useFlagsContext } from "./FlagsContext";

const Carusel = () => {
  const flags = useFlagsContext();

  return (
    <div className="bg-slate-400 relative h-56 sm:h-64 xl:h-80 2xl:h-96 border border-black overflow-hidden rounded-lg shadow-lg">
      <Carousel
        slide={false}
        indicators={false}
        controls={true}
        className="carousel-container"
      >
        {flags.map((flag, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-full"
            style={{
              backgroundImage: `url('/bg.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              className="object-cover rounded-lg"
              src={flag}
              alt={`Flag ${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carusel;
