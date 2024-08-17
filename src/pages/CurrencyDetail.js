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
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0072C6] to-[#00A3E0]">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={coin.image.large}
              alt={coin.name}
              width={64}
              height={64}
              className="rounded-full"
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground">
                {coin.name}
              </h1>
              <p className="text-lg text-primary-foreground">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button className="text-primary-foreground hover:bg-primary-foreground/10 px-4 py-2 border rounded-md">
              Buy
            </button>
            <button className="text-primary-foreground px-4 py-2 border rounded-md">
              Sell
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Line data={chartData} className="aspect-[16/9]" />
            <div className="flex justify-center gap-2 mt-4">
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
          </div>
          <div className="grid gap-6">
            <div className="p-4 border rounded-md">
              <h2 className="font-medium text-lg">Key Details</h2>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span>
                    ${coin.market_data.market_cap.usd.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trading Volume</span>
                  <span>
                    ${coin.market_data.total_volume.usd.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Circulating Supply
                  </span>
                  <span>
                    {coin.market_data.circulating_supply.toLocaleString()} BTC
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="font-medium text-lg">News &amp; Updates</h2>
              <div className="mt-2">
                {/* Replace these with real news data */}
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    width={64}
                    height={64}
                    alt="News Thumbnail"
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-medium">
                      Bitcoin Reaches New All-Time High
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Bitcoin has surpassed its previous all-time high, reaching
                      a new milestone for the cryptocurrency.
                    </p>
                    <a href="#" className="text-primary hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <img
                    src="/placeholder.svg"
                    width={64}
                    height={64}
                    alt="News Thumbnail"
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-medium">
                      Institutional Investors Flock to Bitcoin
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Major financial institutions are increasingly investing in
                      Bitcoin, driving up the price and adoption.
                    </p>
                    <a href="#" className="text-primary hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-md">
              <h2 className="font-medium text-lg">
                Cryptocurrency Description
              </h2>
              <p className="mt-2">{coin.description.en}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrencyDetail;
