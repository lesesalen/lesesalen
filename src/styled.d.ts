import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      red: string;
      darkRed: string;
      blue: string;
      green: string;
      gray: string;
      lightGray: string;
    };
  }
}
