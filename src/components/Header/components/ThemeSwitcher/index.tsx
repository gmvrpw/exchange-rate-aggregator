import * as S from "./styles";
import Icon from "../../../Icon";
import { useThemeContext } from "../../../../contexts/theme";
import { Theme } from "../../../../contexts/theme/types";

const ThemeSwitcher = () => {
  const [context, { useDarkTheme, useLightTheme, useDefaultTheme }] =
    useThemeContext();

  return (
    <S.Container>
      <S.Variant active={context.type === Theme.LIGHT} onClick={useLightTheme}>
        <Icon icon={"sunny"} size={24} />
      </S.Variant>
      <S.Variant
        active={context.type === Theme.DEFAULT}
        onClick={useDefaultTheme}
      >
        {context.theme.page.background}
      </S.Variant>
      <S.Variant active={context.type === Theme.DARK} onClick={useDarkTheme}>
        <Icon icon={"dark_mode"} size={24} />
      </S.Variant>
    </S.Container>
  );
};

export default ThemeSwitcher;
