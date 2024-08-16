import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Chart from "chart.js/auto"; // Import Chart.js for graphing

export default function CurrencyDetail() {
  const { id } = useParams(); // Get the currency ID from the URL
  const [currencyData, setCurrencyData] = useState(null);
  const [chartData, setChartData] = useState(null);

  // API Endpoints
  const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

  const HistoricalChart = (id, days = 365, currency = "usd") =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

  useEffect(() => {
    const testId = id || "bitcoin"; // Use URL id or fallback to a known valid coin ID for testing

    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get(SingleCoin(testId));
        console.log("Currency Data:", response.data); // Log the response data
        setCurrencyData(response.data);
      } catch (error) {
        console.error("Error fetching currency data:", error.message);
      }
    };

    const fetchChartData = async () => {
      try {
        const response = await axios.get(HistoricalChart(testId));
        console.log("Chart Data:", response.data); // Log the chart data
        setChartData(response.data.prices);
      } catch (error) {
        console.error("Error fetching chart data:", error.message);
      }
    };

    fetchCurrencyData();
    fetchChartData();
  }, [id]);

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById("priceChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: chartData.map((point) => {
            const date = new Date(point[0]);
            return `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
          }),
          datasets: [
            {
              label: "Price (USD)",
              data: chartData.map((point) => point[1]),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
                tooltipFormat: "MMM D",
              },
            },
            y: {
              ticks: {
                callback: function (value) {
                  return `$${value}`;
                },
              },
            },
          },
        },
      });
    }
  }, [chartData]);

  if (!currencyData) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold">{currencyData.name}</h2>
      <img
        src={currencyData.image.large}
        alt={currencyData.name}
        className="my-4"
      />
      <p>Current Price: ${currencyData.market_data.current_price.usd}</p>
      <p>ATH: ${currencyData.market_data.ath.usd}</p>
      <p>
        ATH Change Percentage:{" "}
        {currencyData.market_data.ath_change_percentage.usd}%
      </p>
      <p>ATL: ${currencyData.market_data.atl.usd}</p>
      <p>
        ATL Change Percentage:{" "}
        {currencyData.market_data.atl_change_percentage.usd}%
      </p>
      <p>Circulating Supply: {currencyData.market_data.circulating_supply}</p>
      <p>
        Total Volume: $
        {currencyData.market_data.total_volume.usd.toLocaleString()}
      </p>
      <canvas id="priceChart" width="400" height="200"></canvas>{" "}
      {/* Chart Canvas */}
    </div>
  );
}
