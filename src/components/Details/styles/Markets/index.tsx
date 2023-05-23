import { styled } from "solid-styled-components";

const Markets = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media screen and (min-width: 600px) {
    grid-column: 1 / 3;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Markets;
