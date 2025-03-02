# API Integration

This document explains how the Crypto Price Tracker integrates with cryptocurrency APIs to fetch and display real-time data.

## API Provider: CoinGecko

[CoinGecko API](https://www.coingecko.com/en/api/documentation)

## API Implementation

### API Service

```javascript
// src/services/api.js
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 5,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 429) {
      throw new Error("API rate limit exceeded. Please try again later.");
    }
    throw new Error("Failed to fetch cryptocurrency data");
  }
};
```

# API Integration Details

# Overview

The fetchCryptoData function integrates with the CoinGecko API to fetch real-time cryptocurrency data. This document outlines how data is fetched and updated.

# API Endpoint

Base URL: https://api.coingecko.com/api/v3

# Query Parameters

The function makes a GET request with the following query parameters:

vs_currency: Set to usd to fetch prices in US dollars.

order: Set to market_cap_desc to order results by descending market cap.

per_page: Set to 5 to limit the number of results per page.

page: Set to 1 to fetch the first page of results.

sparkline: Set to false to exclude sparkline data.

price_change_percentage: Set to 24h to include 24-hour price change percentage.

vs_currency: Set to usd to fetch prices in US dollars.

order: Set to market_cap_desc to order results by descending market cap.

per_page: Set to 5 to limit the number of results per page.

page: Set to 1 to fetch the first page of results.

sparkline: Set to false to exclude sparkline data.

price_change_percentage: Set to 24h to include 24-hour price change percentage.

# API Request:

The function uses axios.get() to send a GET request to the CoinGecko API.

Query parameters are passed through the params object.

# Response Handling:

If the request is successful, response.data contains the cryptocurrency data in JSON format.

The function returns this data.

# Error Handling:

If the API responds with a 429 status code (rate limit exceeded), a specific error message is thrown:

throw new Error("API rate limit exceeded. Please try again later.");

For all other errors, a generic error is thrown:

throw new Error("Failed to fetch cryptocurrency data");

# Data Update Strategy

Initial Fetch:
The data is fetched by invoking fetchCryptoData().

Manual Refresh:
To update the data manually, you can call the fetchCryptoData() function again. This allows dynamic re-fetching without page reloads.

Error Feedback:
Users receive clear error messages when data fetching fails, either due to rate limits or other issues.
