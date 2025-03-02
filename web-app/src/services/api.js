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
