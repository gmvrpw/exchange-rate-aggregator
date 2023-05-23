import { Component, createSignal, Resource, Show, Suspense } from "solid-js";

import { Stock } from "../../resources/stock/types";

import Favorite from "../Favorite";

import * as S from "./styles";

interface StockCardProps {
  stock: Resource<Stock>;
}

const StockCard: Component<StockCardProps> = (props) => {
  const [checked, setChecked] = createSignal(false);
  const toggleChecked = () => setChecked((value) => !value);

  const [opened, setOpened] = createSignal(false);
  const toggleOpened = () => setOpened((value) => !value);

  return (
    <S.Container>
      <S.Actions>
        <Show when={!props.stock.loading} fallback={<S.FavoriteSkeleton />}>
          <Favorite size={24} checked={checked()} onClick={toggleChecked} />
        </Show>
      </S.Actions>
      <Show when={!props.stock.loading} fallback={<S.NameSkeleton />}>
        <S.Name>
          {props.stock()?.name} <S.Symbol>{props.stock()?.symbol}</S.Symbol>
        </S.Name>
      </Show>
      <Show when={!props.stock.loading} fallback={<S.PriceSkeleton />}>
        <S.Price>
          {`${props.stock()?.requiredCurrency.icon}${
            props.stock()?.value.minValue
          } - ${props.stock()?.requiredCurrency.icon}${
            props.stock()?.value.maxValue
          }`}
        </S.Price>
      </Show>
      <Show when={!props.stock.loading} fallback={<S.DescriptionSkeleton />}>
        <Show when={props.stock()?.description !== ""}>
          <S.Description opened={opened()}>
            <S.About opened={opened()} onClick={[setOpened, true]}>
              {props.stock()?.description}
            </S.About>
            <S.Toggle onClick={toggleOpened}>
              {opened() ? "Less" : "More"}
            </S.Toggle>
          </S.Description>
        </Show>
      </Show>
    </S.Container>
  );
};

export default StockCard;
