import { createGlobalStyles } from "solid-styled-components";

export const GlobalStyles = () => {
  const Styles = createGlobalStyles`
    html,
    body {
      padding: 0;
      margin: 0;
      border: 0;
      font-family: Inter, sans-serif;
    }
  `;
  return <Styles />;
};

const colors = {};

const light = {};

export const theme = {
  light,
};

declare module "solid-styled-components" {
  export interface DefaultTheme {}
}
