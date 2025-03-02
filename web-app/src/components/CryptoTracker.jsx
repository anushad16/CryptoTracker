import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw, Search, TrendingUp, TrendingDown } from "lucide-react";
import { fetchCryptoData } from "../services/api";
import CryptoCard from "./CryptoCard";
import LoadingSpinner from "./LoadingSpinner";

const CryptoTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: cryptoData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
  });

  const handleRefresh = () => {
    refetch();
  };

  const filteredCryptos =
    cryptoData?.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-semibold">Live Cryptocurrency Prices</h2>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <button
            onClick={handleRefresh}
            disabled={isFetching}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`h-5 w-5 ${isFetching ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner />
        </div>
      ) : isError ? (
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-center">
          <p className="text-red-300">Error loading data: {error.message}</p>
          <button
            onClick={handleRefresh}
            className="mt-2 px-4 py-2 bg-red-700 hover:bg-red-800 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          {filteredCryptos.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p>No cryptocurrencies found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCryptos.map((crypto) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CryptoTracker;
