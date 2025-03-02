import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-3 text-gray-400">Loading data...</span>
    </div>
  );
};

export default LoadingSpinner;
