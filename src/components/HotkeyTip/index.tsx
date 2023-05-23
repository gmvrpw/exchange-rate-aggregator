import { ComponentProps, ParentComponent, Show, splitProps } from "solid-js";
import * as S from "./styles";

export interface HotkeyTipProps extends ComponentProps<"div"> {
  description?: string;
}

const HotkeyTip: ParentComponent<HotkeyTipProps> = (props) => {
  const [local, others] = splitProps(props, ["description", "children"]);
  return (
    <S.Container {...others}>
      <S.Hotkeys>{local.children}</S.Hotkeys>
      <Show when={local.description !== undefined}>
        <S.Description>{local.description}</S.Description>
      </Show>
    </S.Container>
  );
};

export default HotkeyTip;
