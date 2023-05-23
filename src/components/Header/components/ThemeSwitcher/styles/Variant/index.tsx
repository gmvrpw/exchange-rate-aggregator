import { styled } from "solid-styled-components";
import { Component, ComponentProps } from "solid-js";

interface VariantProps extends ComponentProps<"button"> {
  active: boolean;
}

const Variant: Component<VariantProps> = styled.button`
  margin: 0;
  border: none;
  padding: 12px 16px;
  background: ${(props) => (props.active ? "gray" : "white")};
`;

export default Variant;
