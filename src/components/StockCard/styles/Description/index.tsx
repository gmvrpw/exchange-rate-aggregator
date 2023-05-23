import { styled } from "solid-styled-components";

const About = styled.div`
  grid-column: 1 / 3;
  color: white;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default About;
