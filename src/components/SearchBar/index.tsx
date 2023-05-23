import { Component, ComponentProps } from "solid-js";

import { useSearchContext } from "../../contexts/search";

import Key from "../Key";

import * as S from "./styles";

const SearchBar: Component<ComponentProps<"input">> = () => {
  const [
    { hidden, searching, query },
    { startSearching, stopSearching, setQuery },
  ] = useSearchContext();

  return (
    <S.Wrapper hidden={hidden()} active={searching()}>
      <S.Icon
        size={24}
        icon={"search"}
        active={searching() && query() !== ""}
      />
      <S.Input
        searching={searching()}
        onFocus={startSearching}
        onBlur={stopSearching}
        onInput={(e) => setQuery(e.target.value)}
        placeholder={"For example: AAPL"}
      />
      <S.Tip hidden={searching()}>
        <Key key={"/"} />
      </S.Tip>
    </S.Wrapper>
  );
};

export default SearchBar;
