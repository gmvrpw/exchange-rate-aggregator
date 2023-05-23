export default {
  page: {
    background: "#fff",
  },
  favorite: {
    modifiers: {
      checked: {
        color: "orange",
      },
    },
  },
  market: {
    color: "#000",
  },
  hotkeyTip: {
    color: "#000",
  },
  searchOverlay: {
    background: "#fff",
  },
  searchBar: {
    icon: {
      color: "#c0c0c0",
      modifiers: {
        active: {
          color: "#000",
        },
      },
    },
    input: {
      color: "#c0c0c0",
      background: "#fff",
      boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0)",
      outline: "none",
      modifiers: {
        searching: {
          color: "#000",
          boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.15)",
          outline: "4px solid blueviolet",
        },
      },
      components: {
        placeholder: {
          color: "#c0c0c0",
        },
        selection: {
          color: "#000",
          background: "rebeccapurple",
        },
      },
    },
    tip: {
      color: "#c0c0c0",
    },
  },
  stockCard: {
    background:
      "linear-gradient( 130deg, rgba(89, 0, 255, 1) 0%, rgba(102, 27, 100, 1) 100% );",
    color: "hsl(0, 0%, 100%, 1)",
    components: {},
  },
  stockRow: {
    color: "#000",
    background: "#fff",
  },
};
