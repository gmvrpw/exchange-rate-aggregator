import {
  createContext,
  createSignal,
  ParentComponent,
  useContext,
} from "solid-js";
import { SearchContextDataType } from "./types";

export const SearchContext = createContext<SearchContextDataType>();

export const useSearchContext = () => useContext(SearchContext)!;

const SearchProvider: ParentComponent = (props) => {
  const [hidden, setHidden] = createSignal<boolean>(false);
  const [searching, setSearching] = createSignal<boolean>(false);
  const [query, setQuery] = createSignal<string>("");

  const searchContextData: SearchContextDataType = [
    {
      hidden,
      searching,
      query,
    },
    {
      hide: () => setHidden(true),
      show: () => setHidden(false),
      startSearching: () => setSearching(true),
      stopSearching: () => setSearching(false),
      setQuery,
    },
  ];

  return (
    <SearchContext.Provider value={searchContextData}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
