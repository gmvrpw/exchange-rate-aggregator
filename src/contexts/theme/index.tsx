import { createContext, ParentProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { ThemeProvider } from "solid-styled-components";

import { Theme, ThemeContextType } from "./types";
import { dark, light } from "./themes";

export const ThemeContext = createContext<ThemeContextType>([
  {
    type: Theme.DEFAULT,
    theme: light,
  },
  {
    useDarkTheme: () => {},
    useLightTheme: () => {},
    useDefaultTheme: () => {},
  },
]);

export const useThemeContext = () => useContext(ThemeContext);

export default (props: ParentProps) => {
  const [state, setState] = createStore({
    type: Theme.DEFAULT,
    theme: light,
  });

  const themeContext: ThemeContextType = [
    state,
    {
      useDarkTheme: () =>
        setState({
          type: Theme.DARK,
          theme: dark,
        }),
      useLightTheme: () =>
        setState({
          type: Theme.LIGHT,
          theme: light,
        }),
      useDefaultTheme: () =>
        setState({
          type: Theme.DEFAULT,
          theme: light,
        }),
    },
  ];

  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={state.theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
