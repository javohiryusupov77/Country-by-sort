import React from "react";
import { Carousel } from "flowbite-react";
import { useCoinContext } from "./ContextProvide";
import { useCurrencyContext } from "./CurrencyContext";
import { TypeAnimation } from "react-type-animation";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Carusel = () => {
  const { selectedCoins } = useCoinContext();
  const { currency } = useCurrencyContext();

  const coinChunks = chunkArray(selectedCoins, 4);
const styleChange = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-inherit group-hover:bg-inherit group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-inherit dark:group-hover:bg-inherit dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6 hidden",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};



  return (
    <div
      style={{
        backgroundImage: `url('/bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 border border-black overflow-hidden rounded-lg shadow-lg"
    >
      <div>
        <TypeAnimation
          className="ml-72 text-center text-3xl md:text-5xl"
          sequence={["CRYPTOFOLIO WATCH LIST", 2000]}
          wrapper="span"
          speed={50}
          style={{
            color: "#87CEEB",
          }}
          repeat={Infinity}
        />
      </div>
      <Carousel
        theme={styleChange}
        slideInterval={2000}
        indicators={false}
        controls={true}
        className="carousel-container"
      >
        {coinChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            style={{
              backgroundImage: `url('/bg.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-full flex flex-col items-center justify-center space-y-4 p-4"
          >
            <div className="flex space-x-20">
              {chunk.map((coin, coinIndex) => (
                <div key={coinIndex} className="flex flex-col items-center">
                  <img
                    className="object-cover rounded-lg w-24 h-24"
                    src={coin.image}
                    alt={`Coin ${chunkIndex * 4 + coinIndex}`}
                  />
                  <div className="flex gap-4">
                    <p className="text-white">{coin.symbol.toUpperCase()}</p>
                    <span
                      className={`${
                        coin.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </div>
                  <p className="text-white">
                    {currency === "USD"
                      ? `$${coin.current_price.toLocaleString()}`
                      : currency === "TRY"
                      ? `₺${coin.current_price.toLocaleString()}`
                      : currency === "ETH"
                      ? `Ξ${coin.current_price.toLocaleString()}`
                      : `$${coin.current_price.toLocaleString()}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carusel;
