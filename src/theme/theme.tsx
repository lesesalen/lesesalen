import React, { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    backgroundColor: "#f5f5f5",
    red: "#ff0000",
    darkRed: "#e50003",
    blue: "#008bf8",
    green: "#00e557",
    gray: "#161616",
    lightGray: "#f1f1f1",
  },
};

interface Props {
  children: ReactNode;
}

export const Theme = ({ children }: Props): JSX.Element => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
);
