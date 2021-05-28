import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#faa400",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#faa400",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#6e0000",
  backgroundDisabled: "#440404",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#360000",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#360000",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#faa400",
  borderColor: "#524B63",
  card: "#1b0202",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
