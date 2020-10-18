declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "typography-theme-ocean-beach" {
  import { TypographyOptions } from "typography";
  const Theme: TypographyOptions;

  export = Theme;
}
