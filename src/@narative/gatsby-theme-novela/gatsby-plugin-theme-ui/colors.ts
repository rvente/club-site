import prism from "./prism";

const darkThemeBase = "#141414";

export default {
  prism,

  primary: "#000",
  secondary: "#73737D",
  grey: "#73737D",
  background: "#fafafa",
  accent: "rgb(48, 146, 234, 0.75)",
  hover: "rgba(0, 0, 0, 0.07)",
  gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)",
  articleText: "#08080B",
  track: "rgba(8, 8, 11, 0.3)",
  progress: "#000",
  card: "#fff",
  error: "#EE565B",
  success: "#46B17B",
  errorBackground: "rgba(238, 86, 91, 0.1)",
  horizontalRule: "rgba(8, 8, 11, 0.15)",
  inputBackground: "rgba(0, 0, 0, 0.05)",
  bright: "#fafafa",
  modes: {
    dark: {
      grey: "#73737D",
      primary: "#fff",
      secondary: "#fff",
      accent: "rgb(48, 146, 234, 0.75)",
      background: darkThemeBase,
      hover: "rgba(255, 255, 255, 0.07)",
      gradient: `linear-gradient(180deg, ${darkThemeBase} 0%, rgba(66, 81, 98, 0.16) 100%)`,
      articleText: "#fff",
      track: "rgba(255, 255, 255, 0.3)",
      progress: "#fff",
      card: "#150F1A",
      error: "#EE565B",
      success: "#46B17B",
      errorBackground: "rgba(238, 86, 91, 0.1)",
      horizontalRule: "rgba(255, 255, 255, 0.15)",
      inputBackground: "rgba(255, 255, 255, 0.07)",
    },
  },
};
