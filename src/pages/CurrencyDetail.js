import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
} from "recharts";

function CurrencyDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFrame, setTimeFrame] = useState(30);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        console.log("Fetching data for:", id);
        const coinResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoin(coinResponse.data);

        const chartResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeFrame}`
        );
        setHistoricalData(chartResponse.data.prices);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error fetching coin data");
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id, timeFrame]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const chartData = historicalData.map((price) => ({
    date: new Date(price[0]).toLocaleDateString(),
    value: price[1],
  }));

  return (
    <div className="d-flex flex-column min-vh-100">
      <section className="w-100 pt-4 pt-md-5 pt-lg-5">
        <div className="container py-5">
          <div className="row gx-4">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={coin.image.large}
                alt={coin.name}
                style={{ width: "50px", height: "50px", marginRight: "15px" }}
              />
              <div>
                <h1 className="display-5 fw-bold">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </h1>
                <p className="lead">{coin.description.en.split(".")[0]}.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-start">
              <div className="d-inline-flex align-items-center gap-2 bg-primary text-white px-3 py-1 rounded">
                <span>{coin.symbol.toUpperCase()}</span>
              </div>
              <div className="mt-3">
                <div className="h2 fw-bold">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </div>
                <div className="text-muted">
                  <span
                    className={`d-inline-flex align-items-center gap-1 ${
                      coin.market_data.price_change_percentage_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </span>
                  in the last 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 py-4 py-md-5 py-lg-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold">Historical Price</h2>
            <p className="lead">
              View the historical price chart for {coin.name} to understand its
              price movements over time.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <LineChart
              width={800}
              height={300}
              data={chartData}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip />
              <Line
                dataKey="value"
                type="natural"
                stroke="blue"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
            <div className="d-flex justify-content-center mt-3">
              <button
                className={`btn btn-outline-dark mx-1 ${
                  timeFrame === 1 ? "active" : ""
                }`}
                onClick={() => setTimeFrame(1)}
              >
                1d
              </button>
              <button
                className={`btn btn-outline-dark mx-1 ${
                  timeFrame === 7 ? "active" : ""
                }`}
                onClick={() => setTimeFrame(7)}
              >
                1w
              </button>
              <button
                className={`btn btn-outline-dark mx-1 ${
                  timeFrame === 30 ? "active" : ""
                }`}
                onClick={() => setTimeFrame(30)}
              >
                1m
              </button>
              <button
                className={`btn btn-outline-dark mx-1 ${
                  timeFrame === 1825 ? "active" : ""
                }`}
                onClick={() => setTimeFrame(1825)}
              >
                5y
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 py-4 py-md-5 py-lg-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold">Key Details</h2>
            <p className="lead">
              Explore the key details and metrics for {coin.name}.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Market Cap</Card.Title>
                  <Card.Text className="h4 fw-bold">
                    ${coin.market_data.market_cap.usd.toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Circulating Supply</Card.Title>
                  <Card.Text className="h4 fw-bold">
                    {coin.market_data.circulating_supply.toLocaleString()}{" "}
                    {coin.symbol.toUpperCase()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>24h Trading Volume</Card.Title>
                  <Card.Text className="h4 fw-bold">
                    ${coin.market_data.total_volume.usd.toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrencyDetail;
