import { extendTheme, textDecoration } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

interface ThemeProps {
  [key: string]: any;
}

const styles = {
  global: (props: ThemeProps) => ({
    body: { bg: mode("#f0e7db", "#202023")(props) },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: ThemeProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Gowun Dodum'",
  body: "'Gowun Dodum'",
};

const colors = { grassTeal: "#88ccca" };

const config = { initialColorMode: "dark", useSystemColorMode: true };

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
});

export default theme;
