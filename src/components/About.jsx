import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AboutPage() {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${cca3}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [cca3]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!country) return <div className="text-center text-red py-10">No data found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-32 h-20 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
          <p className="text-lg text-gray-700">
            Capital: {country.capital?.[0] ?? "N/A"}
          </p>
          <p className="text-lg text-gray-700">Region: {country.region}</p>
          <p className="text-lg text-gray-700">
            Population: {country.population.toLocaleString()}
          </p>
          <p className="text-lg text-gray-700">
            Area: {country.area?.toLocaleString()} km²
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
