import { styled } from "solid-styled-components";

const Container = styled.header`
  box-sizing: border-box;
  padding: 108px 0 64px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    min-height: 128px;
  }
`;

export default Container;
