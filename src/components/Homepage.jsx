import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useCoinContext } from "./ContextProvide";
import { Link } from "react-router-dom";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const { selectedCoins, toggleCoin } = useCoinContext();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [visiblePages, setVisiblePages] = useState(5); // Number of visible pages

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=249&page=1&sparkline=false&price_change_percentage=24h"
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    search.toLowerCase() === ""
      ? true
      : coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCoin = currentPage * itemsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - itemsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const totalPages = Math.ceil(filteredCoins.length / itemsPerPage);

  // Determine the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a coin..."
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <Table.Head>
            <Table.HeadCell>Coin</Table.HeadCell>
            <Table.HeadCell>Current Price</Table.HeadCell>
            <Table.HeadCell>24h Change</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentCoins.map((coin) => (
              <Table.Row
                key={coin.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <Link to={`/about/${coin.id}`}>
                    <div className="flex items-center space-x-2">
                      <img
                        src={coin.image}
                        alt={`Logo of ${coin.name}`}
                        className="h-6 w-6"
                      />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {coin.name}
                      </span>
                    </div>
                  </Link>
                </Table.Cell>
                <Table.Cell>${coin.current_price.toLocaleString()}</Table.Cell>
                <Table.Cell>
                  <span
                    className={`${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h !== null &&
                    coin.price_change_percentage_24h !== undefined
                      ? coin.price_change_percentage_24h.toFixed(2)
                      : "N/A"}
                    %
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <EyeIcon
                    className={`h-5 w-5 cursor-pointer ${
                      selectedCoins.some((c) => c.id === coin.id)
                        ? "text-green-500"
                        : "text-black-500"
                    }`}
                    aria-hidden="true"
                    onClick={() => toggleCoin(coin)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center gap-4 items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          &lt;
        </button>
        <div className="flex items-center space-x-2">
          {startPage > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                1
              </button>
              {startPage > 2 && <span>...</span>}
            </>
          )}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {page}
            </button>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span>...</span>}
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default HomePage;
