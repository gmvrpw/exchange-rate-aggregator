import { Accessor } from "solid-js";

export type SearchContextDataType = [
  {
    hidden: Accessor<boolean>;
    searching: Accessor<boolean>;
    query: Accessor<string>;
  },
  {
    hide: () => void;
    show: () => void;
    startSearching: () => void;
    stopSearching: () => void;
    setQuery: (query: string) => void;
  }
];
