import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// API Endpoints
const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export default function Table() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd"); // Default currency
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch cryptocurrency data
    const fetchCoins = async () => {
      try {
        const response = await axios.get(CoinList(currency));
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins();
  }, [currency]);

  const handleCoinClick = (id) => {
    navigate(`/currency/${id}`); // Navigate to the single currency page with the coin ID
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#2563EB] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter text-[#F8FAFC] sm:text-4xl md:text-5xl">
              Cryptocurrency Listing and Pricing
            </h1>
            <p className="mt-4 text-lg text-[#F8FAFC] md:text-xl">
              Explore the latest cryptocurrency prices and market data.
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Symbol
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      24h Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coins.map((coin) => (
                    <tr
                      key={coin.id}
                      onClick={() => handleCoinClick(coin.id)}
                      className="cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img
                            src={coin.image}
                            width={24}
                            height={24}
                            alt={coin.name}
                            className="rounded-full"
                            style={{ aspectRatio: "24/24", objectFit: "cover" }}
                          />
                          <span className="font-medium">{coin.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {coin.symbol.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${coin.current_price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium ${
                            coin.price_change_percentage_24h > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6 md:py-12">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="block mt-2 hover:underline">
              About Us
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Our Team
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Careers
            </a>
            <a href="#" className="block mt-2 hover:underline">
              News
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <a href="#" className="block mt-2 hover:underline">
              Cryptocurrency Listing
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Pricing Data
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Market Analysis
            </a>
            <a href="#" className="block mt-2 hover:underline">
              API Access
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <a href="#" className="block mt-2 hover:underline">
              Blog
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Documentation
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Support
            </a>
            <a href="#" className="block mt-2 hover:underline">
              FAQs
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="block mt-2 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Cookie Policy
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="block mt-2 hover:underline">
              Sales
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Support
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Partnerships
            </a>
            <a href="#" className="block mt-2 hover:underline">
              Media
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
