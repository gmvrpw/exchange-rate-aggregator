import {
  Accessor,
  batch,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { StockPriceCurrent } from "./types";

const useStockPriceCurrent = (
  symbol: Accessor<string>,
  market: Accessor<string>
) => {
  const [stockParameters, setStockParameters] = createSignal({
    symbol: "",
    market: "",
  });
  createEffect(() => {
    batch(() => {
      setStockParameters({ symbol: symbol(), market: market() });
    });
  });
  return createResource<StockPriceCurrent, { symbol: string; market: string }>(
    stockParameters,
    async (currentStockParameters) => {
      console.log(currentStockParameters.symbol, currentStockParameters.market);
      if (
        currentStockParameters.symbol === "" ||
        currentStockParameters.market === ""
      ) {
        return {
          price: 0,
          currency: {
            currency: "",
            icon: "",
          },
        };
      }
      const response: StockPriceCurrent = await (
        await fetch(
          `http://192.168.1.105:8080/api/v1/data/stock/${currentStockParameters.symbol}/current?market=${currentStockParameters.market}`
        )
      ).json();
      console.log(response);

      return response;
    }
  );
};

export default useStockPriceCurrent;
