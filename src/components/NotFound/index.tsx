import { Component, ComponentProps, mergeProps, splitProps } from "solid-js";

import image from "../../assets/thinking_face.png";

import * as S from "./styles";

interface NotFoundProps extends ComponentProps<"div"> {
  message?: string;
}

const defaultProps: NotFoundProps = {
  message: "Not Found",
};

const NotFound: Component<NotFoundProps> = (rawProps) => {
  const props = mergeProps(defaultProps, rawProps);
  const [local, others] = splitProps(props, ["message"]);

  return (
    <S.Container {...others}>
      <S.Image src={image} />
      <S.Message>{"Not Found"}</S.Message>
    </S.Container>
  );
};

export default NotFound;
