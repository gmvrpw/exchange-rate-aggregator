import { Accessor, createResource } from "solid-js";
import { StockPrice } from "./types";

const useStockPrice = (symbol: Accessor<string>) => {
  return createResource<StockPrice, string>(
    symbol,
    async (currentSymbol: string) => {
      const response: StockPrice = await (
        await fetch(
          `http://192.168.1.105:8080/api/v1/data/stock/${currentSymbol}/min-max?currency=RUB`
        )
      ).json();

      return response;
    }
  );
};

export default useStockPrice;
