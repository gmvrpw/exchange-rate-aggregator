import { styled } from "solid-styled-components";
import { ParentComponent } from "solid-js";

interface WrapperProps {
  hidden: boolean;
  active: boolean;
}

const Wrapper: ParentComponent<WrapperProps> = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "64px" : "16px")};
  left: 50%;
  translate: -50% 0;
  height: 64px;
  width: 95%;
  font-size: 24px;
  z-index: 3;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  transition: width ease-out 300ms, top linear 100ms,
    ease-in-out opacity 200ms 0ms,
    visibility 0ms ${(props) => (props.hidden ? "200" : "0")}ms;

  @media screen and (min-width: 1024px) {
    top: ${(props) => (props.active ? "64px" : "16px")};
    max-width: 95%;
    width: ${(props) => (props.active ? "1000px" : "600px")};
  }
`;

export default Wrapper;
