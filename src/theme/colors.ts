import { Colors } from "./types";

export const baseColors = {
  failure: "#ff3030",
  primary: "#faa400",
  primaryBright: "#cb8500",
  primaryDark: "#cb8500",
  secondary: "#ffdd9c",
  success: "#00fa6a",
  warning: "#fe0000",
};

export const brandColors = {
  binance: "#faa400",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#69552e',
  textDisabled: '#998c83',
  textSubtle: '#836a38',
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffffff",
  background: "#1b0202",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#6e0000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
