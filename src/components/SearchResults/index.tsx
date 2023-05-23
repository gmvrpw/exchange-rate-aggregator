import { Component, ComponentProps, Index, Show, Suspense } from "solid-js";

import { useSearchContext } from "../../contexts/search";

import useSearchResults from "../../resources/search";

import NotFound from "../NotFound";
import StockRow from "../StockRow";

import * as S from "./styles";

const SearchResults: Component<ComponentProps<"div">> = (props) => {
  const [{ query }] = useSearchContext();
  const [results] = useSearchResults(query);

  return (
    <S.Container {...props}>
      <Show when={query() !== ""}>
        <Suspense>
          <Show
            when={results()?.length !== 0}
            fallback={<NotFound message={"There's nothing!"} />}
          >
            <Index each={results()}>{(item) => <StockRow {...item()} />}</Index>
          </Show>
        </Suspense>
      </Show>
    </S.Container>
  );
};

export default SearchResults;
