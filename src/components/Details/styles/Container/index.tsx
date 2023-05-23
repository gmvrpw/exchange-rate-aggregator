import { styled } from "solid-styled-components";

const Container = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr auto;
  }
`;

export default Container;
