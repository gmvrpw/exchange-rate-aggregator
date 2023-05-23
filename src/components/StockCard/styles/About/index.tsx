import { styled } from "solid-styled-components";
import { Component, ComponentProps } from "solid-js";

interface AboutProps extends ComponentProps<"p"> {
  opened: boolean;
}

const About: Component<AboutProps> = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  white-space: ${(props) => (props.opened ? "none" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: ${(props) => (props.opened ? "text" : "none")};
`;

export default About;
