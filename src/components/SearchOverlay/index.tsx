import { Component } from "solid-js";

import { useSearchContext } from "../../contexts/search";

import Key from "../Key";
import HotkeyTip from "../HotkeyTip";

import * as S from "./styles";

const SearchOverlay: Component = () => {
  const [{ searching }] = useSearchContext();
  return (
    <S.Overlay hidden={!searching()}>
      <S.Content>
        <S.Tips>
          <HotkeyTip description={"to navigate"}>
            <Key key={"ArrowUp"} />
            <Key key={"ArrowDown"} />
          </HotkeyTip>
          <HotkeyTip description={"to open"}>
            <Key key={"Enter"} />
          </HotkeyTip>
          <HotkeyTip description={"to dismiss"}>
            <Key key={"Esc"} />
          </HotkeyTip>
        </S.Tips>
        <S.Results />
      </S.Content>
    </S.Overlay>
  );
};

export default SearchOverlay;
