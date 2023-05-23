import { Accessor, createResource } from "solid-js";
import { SearchResponse } from "./types";

const useSearchResults = (query: Accessor<string>) => {
  return createResource<SearchResponse, string>(
    query,
    async (currentQuery: string) => {
      if (currentQuery === "") return [];
      const response: SearchResponse = await (
        await fetch(
          `http://192.168.1.105:8080/api/v1/data/search?query=${currentQuery}&pageSize=3&pageFrom=0&pageTo=2`
        )
      ).json();

      return response;
    }
  );
};

export default useSearchResults;
