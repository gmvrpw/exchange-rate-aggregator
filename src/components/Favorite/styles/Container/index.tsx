import { styled } from "solid-styled-components";
import { Component, ComponentProps } from "solid-js";

interface ContainerProps extends ComponentProps<"button"> {
  checked: boolean;
}

const Container: Component<ContainerProps> = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${(props) =>
    props.checked ? props.theme?.favorite.modifiers.checked.color : "inherit"};
  opacity: ${(props) => (props.checked ? "1" : "0.5")};
  cursor: pointer;
  transition: color ease-in 100ms;
  &:hover {
    opacity: 1;
  }
`;

export default Container;
