import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const CurrencyDetail = () => {
  const { id } = useParams(); // Get the coin ID from the URL parameters
  const [coin, setCoin] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFrame, setTimeFrame] = useState("30"); // Default to 30 days

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoin(coinResponse.data);

        const chartResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeFrame}`
        );
        setHistoricalData(chartResponse.data);

        setLoading(false);
      } catch (err) {
        setError("Error fetching coin data");
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id, timeFrame]); // Re-fetch data when timeFrame changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Prepare chart data
  const chartData = {
    labels: historicalData?.prices.map((price) =>
      new Date(price[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: historicalData?.prices.map((price) => price[1]),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src={coin.image.large} alt={coin.name} className="h-24 w-24" />
        <h1 className="text-3xl font-bold">{coin.name}</h1>
        <p className="text-gray-500">{coin.symbol.toUpperCase()}</p>
        <p className="mt-2 text-2xl">
          ${coin.market_data.current_price.usd.toLocaleString()}
        </p>
        <p className="text-green-500 mt-1">
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="mt-4 text-gray-700">{coin.description.en}</p>{" "}
        {/* Display the description */}
        {/* Time Frame Buttons */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setTimeFrame("1")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              timeFrame === "1"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground"
            }`}
          >
            1D
          </button>
          <button
            onClick={() => setTimeFrame("7")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              timeFrame === "7"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground"
            }`}
          >
            1W
          </button>
          <button
            onClick={() => setTimeFrame("30")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              timeFrame === "30"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground"
            }`}
          >
            1M
          </button>
          <button
            onClick={() => setTimeFrame("365")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              timeFrame === "365"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground"
            }`}
          >
            1Y
          </button>
        </div>
        <div className="mt-6 w-full max-w-4xl">
          <h2 className="text-xl font-bold">
            Price Chart (Last {timeFrame} Days)
          </h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetail;
