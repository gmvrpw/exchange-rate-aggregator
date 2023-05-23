import { DefaultTheme } from "solid-styled-components";

export enum Theme {
  DEFAULT = 0,
  LIGHT = 1,
  DARK = 2,
}

export type ThemeContextType = [
  {
    type: Theme;
    theme: DefaultTheme;
  },
  {
    useDarkTheme: () => void;
    useLightTheme: () => void;
    useDefaultTheme: () => void;
  }
];
