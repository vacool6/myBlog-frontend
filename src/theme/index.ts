import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

// Configs
import { ColorPallet } from "./colors";

const OverrideTheme = {
  ...chakraTheme,
  ...ColorPallet,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      button: {
        borderRadius: "3px",
      },
      body: {
        fontFamily: "Raleway, sans-serif",
      },
    },
  },
};

const Theme = extendTheme(OverrideTheme);
export default Theme;
