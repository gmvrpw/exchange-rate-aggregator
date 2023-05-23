import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import { GlobalStyles } from "./styles";
import ThemeProvider from "./contexts/theme/index";

import App from "./App";

render(
  () => (
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <GlobalStyles />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
