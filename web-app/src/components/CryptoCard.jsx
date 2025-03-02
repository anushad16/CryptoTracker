import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const CryptoCard = ({ crypto }) => {
  const priceChangeIsPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="font-bold text-lg">{crypto.name}</h3>
            <span className="text-gray-400 uppercase">{crypto.symbol}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Price</span>
            <span className="font-medium text-lg">
              ${crypto.current_price.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">24h Change</span>
            <div
              className={`flex items-center ${
                priceChangeIsPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {priceChangeIsPositive ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span>
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Market Cap</span>
            <span>${crypto.market_cap.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Volume (24h)</span>
            <span>${crypto.total_volume.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
