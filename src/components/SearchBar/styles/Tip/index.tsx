import { ParentComponent } from "solid-js";
import { styled } from "solid-styled-components";
import HotkeyTip, { HotkeyTipProps } from "../../../HotkeyTip";

interface TipProps extends HotkeyTipProps {
  hidden: boolean;
}

const Tip: ParentComponent<TipProps> = styled(HotkeyTip)`
  position: absolute;
  top: 50%;
  right: 20px;
  translate: 0 -50%;
  color: ${(props) => props.theme?.searchBar.tip.color};
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export default Tip;
