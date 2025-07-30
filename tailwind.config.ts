import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0C3C78",
        brandBlueLight: "#1D4ED8",
      },
    },
  },
  plugins: [],
};

export default config;
