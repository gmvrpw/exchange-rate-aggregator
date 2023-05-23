import {
  batch,
  Component,
  createEffect,
  createSignal,
  For,
  Index,
  Resource,
  Show,
  Suspense,
  untrack,
} from "solid-js";
import { createStore } from "solid-js/store";

import { Stock } from "../../resources/stock/types";

import Market from "../Market";
import Graph from "../Graph";

import * as S from "./styles";
import useStockPriceInterval from "../../resources/stockPriceInterval";

interface DetailsProps {
  stock: Resource<Stock>;
}

const Details: Component<DetailsProps> = (props) => {
  const [selectedMarketIndex, selectMarketIndex] = createSignal(0);

  const [selecting, setSelecting] = createSignal(false);
  const [selectedPoint, setSelectedPoint] = createStore({
    date: "",
    price: 0,
  });

  const [stockPriceInterval] = useStockPriceInterval(
    () => props.stock()?.symbol ?? "",
    () => props.stock()?.markets[selectedMarketIndex()].market.stockMarket!,
    () => "1h"
  );

  return (
    <>
      <Show
        when={!props.stock.loading && !stockPriceInterval.loading}
        fallback={<S.GraphSkeleton />}
      >
        <Graph
          series={[
            {
              data:
                stockPriceInterval()?.map((point) => [
                  point.date,
                  point.closeValue,
                ]) ?? [],
            },
          ]}
          onPointSelected={(point) => {
            const date = new Date(point[0]);
            batch(() => {
              setSelecting(true);
              setSelectedPoint({
                date: `${date.toLocaleTimeString()} ${date.toDateString()}`,
                price: point[1],
              });
            });
          }}
          onMouseLeave={() => {
            setSelecting(false);
          }}
        />
      </Show>
      <S.Container>
        <Show when={!props.stock.loading} fallback={<S.PriceSkeleton />}>
          <S.Price>
            <S.Currency>
              {props.stock()?.markets[selectedMarketIndex()].currency.icon}
            </S.Currency>
            {selecting()
              ? selectedPoint.price
              : props.stock()?.markets[selectedMarketIndex()].price}
          </S.Price>
        </Show>
        <S.Details>
          <Show
            when={!props.stock.loading}
            fallback={
              <>
                <S.DetailSkeleton />
                <S.DetailSkeleton />
                <S.DetailSkeleton />
              </>
            }
          >
            <S.Detail>{selecting() ? selectedPoint.date : "Now"}</S.Detail>
          </Show>
        </S.Details>
        <S.Markets>
          <Show
            when={!props.stock.loading}
            fallback={
              <>
                <S.MarketSkeleton />
                <S.MarketSkeleton />
                <S.MarketSkeleton />
                <S.MarketSkeleton />
              </>
            }
          >
            <Index each={props.stock()?.markets}>
              {(market, index) => (
                <Market
                  active={selectedMarketIndex() === index}
                  symbol={props.stock()?.symbol!}
                  market={market().market.stockMarket}
                  price={market().price}
                  currencyIcon={market().currency.icon}
                  priceExchanged={market().priceExchanged}
                  currencyIconExchanged={props.stock()?.requiredCurrency.icon!}
                  onClick={[selectMarketIndex, index]}
                />
              )}
            </Index>
          </Show>
        </S.Markets>
      </S.Container>
    </>
  );
};

export default Details;
