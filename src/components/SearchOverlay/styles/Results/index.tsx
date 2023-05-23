import { styled } from "solid-styled-components";
import SearchResults from "../../../SearchResults";

const Results = styled(SearchResults)`
  position: absolute;
  top: 144px;
  height: calc(100% - 144px);
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Results;
