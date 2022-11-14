import "styled-components";

interface ThemeColorVariants {
  base: string;
  dark?: string;
  darker?: string;
  darkest?: string;
  light?: string;
  lighter?: string;
  lightest?: string;
}

interface Axes {
  horizontal: string;
  vertical: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ThemeColorVariants;
      sky: ThemeColorVariants;
      ink: ThemeColorVariants;
      red: ThemeColorVariants;
    };
    distances: {
      containers: {
        padding: Axes;
      };
      inputs: {
        padding: Axes;
      };
    };
  }
}
