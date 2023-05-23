import { Component, ComponentProps } from "solid-js";
import { styled } from "solid-styled-components";

interface InputProps extends ComponentProps<"input"> {
  searching: boolean;
}

const Input: Component<InputProps> = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  padding: 20px 20px 20px 64px;
  width: 100%;
  height: 64px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: bold;

  color: ${(props) =>
    props.searching
      ? props.theme?.searchBar.input.modifiers.searching.color
      : props.theme?.searchBar.input.color};

  background-color: ${(props) => props.theme?.searchBar.input.background};

  box-shadow: ${(props) =>
    props.searching
      ? props.theme?.searchBar.input.modifiers.searching.boxShadow
      : props.theme?.searchBar.input.boxShadow};

  outline: ${(props) =>
    props.searching
      ? props.theme?.searchBar.input.modifiers.searching.outline
      : props.theme?.searchBar.input.outline};

  transition: box-shadow linear 200ms, color linear 100ms;

  &::selection {
    background: ${(props) =>
      props.theme?.searchBar.input.components.selection.background};

    color: ${(props) =>
      props.theme?.searchBar.input.components.selection.color};
  }
  &::placeholder {
    color: ${(props) =>
      props.theme?.searchBar.input.components.placeholder.color};
  }
`;

export default Input;
