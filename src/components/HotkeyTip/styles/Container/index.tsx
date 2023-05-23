import { styled } from "solid-styled-components";

const Container = styled.div`
  display: none;
  color: ${(props) => props.theme?.hotkeyTip.color};

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`;

export default Container;
