import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Chart from "./chart"; 

function AboutPage() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCoin(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [coinId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!coin)
    return <div className="text-center py-10 text-red-500">No data found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6">
        <img
          src={coin.image.large}
          alt={`${coin.name} logo`}
          className="w-32 h-32 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{coin.name}</h1>
          <p className="text-lg text-gray-700">
            {coin.description.en.split(".")[0]}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Chart />
      </div>
    </div>
  );
}

export default AboutPage;
