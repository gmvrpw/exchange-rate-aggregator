import { Component, ComponentProps, splitProps } from "solid-js";

import * as S from "./styles";
import Icon from "../Icon";

interface FavoriteProps extends ComponentProps<"button"> {
  size?: number;
  checked: boolean;
}

const Favorite: Component<FavoriteProps> = (props) => {
  const [local, others] = splitProps(props, ["size", "checked"]);
  return (
    <S.Container checked={local.checked} {...others}>
      <Icon icon={"star"} size={local.size} fill={local.checked} />
    </S.Container>
  );
};

export default Favorite;
