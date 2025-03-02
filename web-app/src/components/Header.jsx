import React from "react";
import { Coins } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Coins className="h-8 w-8 text-yellow-400 mr-3" />
        <h1 className="text-2xl font-bold text-white">Crypto Price Tracker</h1>
      </div>
    </header>
  );
};

export default Header;
