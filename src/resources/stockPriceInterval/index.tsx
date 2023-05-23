import {
  Accessor,
  batch,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { StockPriceInterval } from "./types";

const useStockPriceInterval = (
  symbol: Accessor<string>,
  market: Accessor<string>,
  interval: Accessor<string>
) => {
  const [intervalDataParameters, setIntervalDataParameters] = createSignal({
    symbol: "",
    market: "",
    interval: "",
  });
  createEffect(() => {
    batch(() => {
      setIntervalDataParameters({
        symbol: symbol(),
        market: market(),
        interval: interval(),
      });
    });
  });
  return createResource<
    StockPriceInterval,
    { symbol: string; market: string; interval: string }
  >(intervalDataParameters, async (currentIntervalDataParameters) => {
    if (
      currentIntervalDataParameters.symbol === "" ||
      currentIntervalDataParameters.market === "" ||
      currentIntervalDataParameters.interval === ""
    ) {
      return [];
    }
    const response: StockPriceInterval = (
      await (
        await fetch(
          `http://192.168.1.105:8080/api/v1/data/stock/${currentIntervalDataParameters.symbol}/interval?market=${currentIntervalDataParameters.market}&interval=${currentIntervalDataParameters.interval}&count=1000`
        )
      ).json()
    ).data;

    return response;
  });
};

export default useStockPriceInterval;
