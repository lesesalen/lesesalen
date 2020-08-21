import Typography from "typography";
import OceanBeach from "typography-theme-ocean-beach";

OceanBeach.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`
    },
    a: {
      color: "#000000",
      textShadow: "none",
      textDecoration: "underline black",
      backgroundImage: "none"
    },
    blockQuote: {
      borderLeft: "0.5925rem solid red"
    }
  };
};

const typography = new Typography(OceanBeach);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
