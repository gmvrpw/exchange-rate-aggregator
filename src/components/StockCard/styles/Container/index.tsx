import { styled } from "solid-styled-components";

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  padding: 24px 32px 32px 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  background: ${(props) => props.theme?.stockCard.background};
  color: ${(props) => props.theme?.stockCard.color};

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr max-content;
  }
`;

export default Container;
