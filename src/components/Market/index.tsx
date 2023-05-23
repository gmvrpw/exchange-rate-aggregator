import { Component, ComponentProps, splitProps } from "solid-js";

import * as S from "./styles";

interface MarketProps extends ComponentProps<"div"> {
  active: boolean;
  symbol: string;
  market: string;
  price: number;
  currencyIcon: string;
  priceExchanged: number;
  currencyIconExchanged: string;
}

const Market: Component<MarketProps> = (props) => {
  const [local, others] = splitProps(props, [
    "active",
    "symbol",
    "market",
    "price",
    "currencyIcon",
    "priceExchanged",
    "currencyIconExchanged",
  ]);
  const price = () => `${local.currencyIcon}${local.price}`;
  const priceExchanged = () =>
    `(${local.currencyIconExchanged}${
      local.priceExchanged !== null ? local.priceExchanged : "?"
    })`;

  return (
    <S.Container active={local.active} {...others}>
      <S.Name>{local.market}</S.Name>
      <S.Price>
        {price()} {priceExchanged()}
      </S.Price>
    </S.Container>
  );
};

export default Market;
