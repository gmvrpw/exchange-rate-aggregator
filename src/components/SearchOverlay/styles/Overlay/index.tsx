import { styled } from "solid-styled-components";
import { ParentComponent } from "solid-js";

interface OverlayProps {
  hidden: boolean;
}

const Overlay: ParentComponent<OverlayProps> = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme?.searchOverlay.background};
  transition: ease-in-out opacity 200ms 0ms,
    visibility 0ms ${(props) => (props.hidden ? "200" : "0")}ms;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  z-index: 2;
`;

export default Overlay;
