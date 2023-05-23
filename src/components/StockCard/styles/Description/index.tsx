import { styled } from "solid-styled-components";
import { Component, ComponentProps } from "solid-js";

interface DescriptionProps extends ComponentProps<"div"> {
  opened: boolean;
}

const Description: Component<DescriptionProps> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  opacity: ${(props) => (props.opened ? "1" : "0.5")};
  cursor: ${(props) => (props.opened ? "unset" : "pointer")};
  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 1 / 3;
  }
`;

export default Description;
