import React from "react";
import { Carousel } from "flowbite-react";

const Carusel = () => {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 border border-black overflow-hidden">
      <Carousel slide={false}>
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Carousel 1"
          />
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Carousel 1"
          />
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Carousel 1"
          />
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Carousel 1"
          />
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Carousel 2"
          />
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Carousel 3"
          />
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Carousel 4"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carusel;
