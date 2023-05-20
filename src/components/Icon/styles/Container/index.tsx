import { styled } from "solid-styled-components";
import { ComponentProps, ParentComponent } from "solid-js";

interface ContainerProps extends ComponentProps<"span"> {
  size?: number;
  fill: boolean;
}

const Container: ParentComponent<ContainerProps> = styled.span`
  ${(props) => (props.size ? `width: ${props.size}px` : "")};
  aspect-ratio: 1 / 1;
  ${(props) => (props.size ? `font-size: ${props.size}px` : "")};
  font-family: "Material Symbols Outlined", sans-serif;
  font-variation-settings: "FILL" ${(props) => (props.fill ? "1" : "0")},
    "wght" 600, "GRAD" 0, "opsz" 24;
`;

export default Container;
