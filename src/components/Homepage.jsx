import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCountryContext } from "./ContextProvide";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const { selectedCountries, toggleCountry } = useCountryContext();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    search.toLowerCase() === ""
      ? true
      : country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <Table.Head>
            <Table.HeadCell>Flag</Table.HeadCell>
            <Table.HeadCell>Country Name</Table.HeadCell>
            <Table.HeadCell>Region</Table.HeadCell>
            <Table.HeadCell>Subregion</Table.HeadCell>
            <Table.HeadCell>Population</Table.HeadCell>
            <Table.HeadCell>Area</Table.HeadCell>
            <Table.HeadCell>Information</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentCountries.map((country) => (
              <Table.Row
                key={country.cca3}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    className="h-6 w-8"
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {country.name.common}
                </Table.Cell>
                <Table.Cell>{country.region}</Table.Cell>
                <Table.Cell>{country.subregion}</Table.Cell>
                <Table.Cell>{country.population.toLocaleString()}</Table.Cell>
                <Table.Cell>{country.area.toLocaleString()} km²</Table.Cell>
                <Table.Cell>
                  <EyeIcon
                    className={`h-5 w-5 mr-2 cursor-pointer ${
                      selectedCountries.includes(country)
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                    aria-hidden="true"
                    onClick={() => toggleCountry(country)}
                  />
                  <Link
                    to={`/about/${country.cca3}`}
                    className="flex items-center font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Information
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
