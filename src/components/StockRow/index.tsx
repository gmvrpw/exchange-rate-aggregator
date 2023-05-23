import { Component, ResourceReturn, Suspense } from "solid-js";
import { useNavigate } from "@solidjs/router";

import Favorite from "../Favorite";

import * as S from "./styles";
import useStockPrice from "../../resources/stockPrice";

interface StockInRowProps {
  name: string;
  symbol: string;
}

const StockRow: Component<StockInRowProps> = (props) => {
  const navigate = useNavigate();

  const [stockPrice] = useStockPrice(() => props.symbol);

  return (
    <S.Container
      tabIndex={0}
      onClick={() => navigate(`/stock/${props.symbol}`)}
    >
      <S.Name>{props.name}</S.Name>
      <S.Symbol>{props.symbol}</S.Symbol>
      <S.Price>
        <Suspense fallback={<S.PriceSkeleton />}>
          {stockPrice()?.currency.icon}
          {stockPrice()?.value.maxValue}-{stockPrice()?.value.minValue}
        </Suspense>
      </S.Price>
    </S.Container>
  );
};

export default StockRow;
