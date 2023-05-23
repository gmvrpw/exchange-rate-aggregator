import { styled } from "solid-styled-components";

const Actions = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 1024px) {
    grid-column: 1 / 3;
  }
`;

export default Actions;
