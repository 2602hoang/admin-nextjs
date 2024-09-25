import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#171821",
        "dark-slate-gray": "#21222D",
        "light-gray": "#88888c4d",
        "gray-menu": "#87898E",
        "light-teal": "#A9DFD8",
        "light-gray-text": "#a0a0a0",
        "darker-gray": "#2C2D33",
        gold: "#FCB859",
        "light-pink": "#f2c8ed",
        "sky-blue": "#20aef3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
