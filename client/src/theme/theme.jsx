import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
     stone50:  "#fafaf9",
     stone100: "#f5f5f4",
     stone200: "#e7e5e4",
     stone300: "#d6d3d1",
     stone400: "#a8a29e",
     stone500: "#78716c",
     stone600: "#57534e",
     stone700: "#44403c",
     stone800: "#292524",
     stone900: "#1c1917",
     stone950: "#0c0a09",
  // yellow
    yellow:"#d0c040"
  },
  fontSizes: {
    text: "1.3rem",
    bigText: "1.8",
    subtitle: "2rem",
    title: "2.5rem",
    bigTitle: "4rem"
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
