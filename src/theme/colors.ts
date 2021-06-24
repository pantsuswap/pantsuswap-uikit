import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#ea95bf",
  primaryBright: "#00c0ff",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#ff00e9",
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
  textSubtle: "#ea95bf",
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
  background: "#6d3568",
  backgroundDisabled: "#220522",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#2c222b",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#2c222b",
  text: "#FFFFFF",
  textDisabled: "#8b627f",
  textSubtle: "#ea95bf",
  borderColor: "#524B63",
  card: "#54194f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};