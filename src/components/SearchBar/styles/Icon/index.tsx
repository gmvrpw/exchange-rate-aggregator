import { ParentComponent } from "solid-js";
import { styled } from "solid-styled-components";

import IconComponent from "../../../Icon";

interface IconProps {
  icon: string;
  size: number;
  active: boolean;
}

const Icon: ParentComponent<IconProps> = styled(IconComponent)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${(props) =>
    props.active
      ? props.theme?.searchBar.icon.modifiers.active.color
      : props.theme?.searchBar.icon.color};

  transition: color ease-in-out 100ms, font-size ease-in-out 100ms;
  cursor: default;
  user-select: none;
`;

export default Icon;
