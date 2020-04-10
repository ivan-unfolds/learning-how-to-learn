import { themes } from "mdx-deck";

const white = "#e5e5e5";
const dark = "#292929";
const green = "#a5ceb6";

export const customTheme = {
  googleFont:
    "https://cdn.jsdelivr.net/gh/tonsky/FiraCode@2/distr/fira_code.css",
  fonts: {
    body: '"Fira code"',
    monospace: '"Fira code"',
  },
  colors: {
    text: white,
    background: dark,
    primary: green,
  },
  text: {
    heading: { color: green, textAlign: "center" },
  },
  styles: {
    ...themes.code.styles,
    li: {
      paddingBottom: "0.7em",
    },
    a: { color: green },
    Slide: {
      maxWidth: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
};
