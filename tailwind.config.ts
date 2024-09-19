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
        menu: "#171821",
        background: "var(--background)",
        foreground: "var(--foreground)",
        content2: "#2b2b36",
        content1: "#21222D",
        focus_border: "#88888c4d",
        color_menu: "#87898E",
        logo: "#A9DFD8",
        text_topday: "#a0a0a0",
        border_menu: "#2C2D33",
        totalsale: "#FCB859",
        productsold: "#f2c8ed",
        newcustomer: "#20aef3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
