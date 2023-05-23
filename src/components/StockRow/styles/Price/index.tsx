import { styled } from "solid-styled-components";

const Price = styled.div`
  display: none;

  @media screen and (min-width: 400px) {
    flex: 1 0 max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-weight: 800;
  }
`;

export default Price;
