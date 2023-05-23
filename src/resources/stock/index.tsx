import { Accessor, createResource } from "solid-js";
import { Market, Stock } from "./types";

const useStock = (symbol: Accessor<string>) => {
  return createResource<Stock, string>(
    symbol,
    async (currentSymbol: string) => {
      if (currentSymbol === "TEST") {
        return new Promise((resolve) => {
          resolve({
            name: "",
            symbol: "",
            description: "",
            requiredCurrency: {
              currency: "",
              icon: "",
            },
            value: {
              minValue: 0,
              maxValue: 0,
            },
            markets: [],
          });
        });
      }

      let response;

      try {
        response = await fetch(
          `http://192.168.1.105:8080/api/v1/data/stock/${currentSymbol}?currency=RUB`
        );
      } catch (e) {
        throw new Error("Server Unavailable");
      }

      if (response.status === 404) {
        throw new Error("Not Found");
      }

      const data: Stock = await response.json();
      return data;
    }
  );
};

export default useStock;
