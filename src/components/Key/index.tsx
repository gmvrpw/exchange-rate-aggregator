import { Component, ComponentProps, Show } from "solid-js";
import * as S from "./styles";

import Icon from "../Icon";

const iconMapping = {
  Enter: "keyboard_return",
  ArrowUp: "arrow_upward",
  ArrowDown: "arrow_downward",
};

interface KeyProps extends ComponentProps<"div"> {
  key: string;
}

const Key: Component<KeyProps> = (props) => {
  return (
    <S.Container {...props}>
      <Show when={props.key in iconMapping} fallback={props.key}>
        <Icon icon={iconMapping[props.key]} size={16} />
      </Show>
    </S.Container>
  );
};

export default Key;
