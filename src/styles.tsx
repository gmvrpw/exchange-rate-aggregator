import {
  createGlobalStyles,
  setup,
  shouldForwardProp,
} from "solid-styled-components";

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

setup(
  null,
  shouldForwardProp((prop) => {
    return prop !== "hidden";
  })
);

declare module "solid-styled-components" {
  export interface DefaultTheme {
    page: {
      background: string;
    };
    favorite: {
      modifiers: {
        checked: {
          color: string;
        };
      };
    };
    hotkeyTip: {
      color: string;
    };
    market: {
      color: string;
    };
    searchOverlay: {
      background: string;
    };
    searchBar: {
      icon: {
        color: string;
        modifiers: {
          active: {
            color: string;
          };
        };
      };
      input: {
        color: string;
        background: string;
        boxShadow: string;
        outline: string;
        modifiers: {
          searching: {
            color: string;
            boxShadow: string;
            outline: string;
          };
        };
        components: {
          placeholder: {
            color: string;
          };
          selection: {
            color: string;
            background: string;
          };
        };
      };
      tip: {
        color: string;
      };
    };
    stockRow: {
      background: string;
      color: string;
    };
    stockCard: {
      background: string;
      color: string;
    };
  }
}
