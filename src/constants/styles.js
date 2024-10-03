import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const GlobalStyles = {
  colors: {
    primary50: "#f0f0f0", // light gray (almost white)
    primary75: "#E3E3E3FF", // light gray (almost white)
    primary100: "#e0e0e0", // lighter gray
    primary200: "#c0c0c0", // medium gray
    primary300: "#A7A7A7FF", // medium gray
    primary400: "#a0a0a0", // darker gray
    primary500: "#000000", // black
    primary700: "#333333", // very dark gray (near-black)
    primary800: "#1a1a1a", // almost black
    accent500: "#ffffff", // white
    error50: "#fcc4e4", // keep error colors as is
    error500: "#9b095c",
    gray500: "#39324a",
    gray700: "#221c30",
  },

  fontFamily: {
    italic: "Poppins-Italic",
    light: "Poppins-Light",
    thin: "Poppins-Thin",
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
  },

  Dimensions: {
    extraSmall: width * 0.03,
    small: width * 0.035,
    regular: width * 0.037,
    medium: width * 0.04,
    large: width * 0.06,
    extraSmall: width * 0.065,
  },

  screen: {
    padding: 20,
  },
};
