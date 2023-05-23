import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { ThemeProvider } from "solid-styled-components";

import { GlobalStyles, theme } from "./styles";

import App from "./App";

render(
  () => (
    <Router>
      <ThemeProvider theme={theme.light}>
        <App />
      </ThemeProvider>
      <GlobalStyles />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
