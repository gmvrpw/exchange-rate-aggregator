import { styled } from "solid-styled-components";
import { Component, ComponentProps } from "solid-js";

interface ContainerProps extends ComponentProps<"div"> {
  active: boolean;
}

const Container: Component<ContainerProps> = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;
  color: ${(props) => props.theme?.market.color};
  background: ${(props) => (props.active ? "rgba(89, 0, 255, 0.05)" : "unset")};
  cursor: pointer;
  transition: background ease-in-out 100ms;
  &:hover {
    outline: 2px solid rgba(102, 50, 153, 0.5);
  }
`;

export default Container;
