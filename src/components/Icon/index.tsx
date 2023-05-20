import { Component, ComponentProps, mergeProps, splitProps } from "solid-js";

import * as S from "./styles";

interface IconProps extends ComponentProps<"span"> {
  icon: string;
  size?: number;
  fill?: boolean;
}

const defaultProps = {
  fill: false,
};

const Icon: Component<IconProps> = (rawProps) => {
  const props = mergeProps(defaultProps, rawProps);
  const [local, others] = splitProps(props, ["icon"]);

  return <S.Container {...others}>{local.icon}</S.Container>;
};

export default Icon;
