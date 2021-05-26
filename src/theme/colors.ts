import { Colors } from "./types";

export const baseColors = {
  failure: "#ff3030",
  primary: "#faa400",
  primaryBright: "#cb8500",
  primaryDark: "#cb8500",
  secondary: "#d70000",
  success: "#00fa6a",
  warning: "#fe0000",
};

export const brandColors = {
  binance: "#faa400",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#6e0000",
  backgroundDisabled: "#000000",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#2b0000",
  tertiary: "#2b0000",
  text: "#ffffff",
  textDisabled: "#8d2a2a",
  textSubtle: "#faa400",
  borderColor: "#524B63",
  card: "#1b0202",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffffff",
  background: "#6e0000",
  backgroundDisabled: "#000000",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#2b0000",
  primaryDark: "#0098A1",
  tertiary: "#2b0000",
  text: "#ffffff",
  textDisabled: "#8d2a2a",
  textSubtle: "#faa400",
  borderColor: "#524B63",
  card: "#1b0202",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
