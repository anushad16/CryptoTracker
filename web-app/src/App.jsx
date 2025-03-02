import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CryptoTracker from "./components/CryptoTracker";
import Header from "./components/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1 minute
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <CryptoTracker />
        </main>
        <footer className="container mx-auto px-4 py-6 border-t border-gray-800 mt-12">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Crypto Price Tracker. Data provided by
            CoinGecko API.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
