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
        // mauden
        menu: "#171821",
        background: "var(--background)",
        foreground: "var(--foreground)",
        // content1_card: "#171821",
        content2: "#2b2b36",
        content1: "#21222D",
        focus_border: "#88888c4d",
        // #212223
        // #171821

        color_menu: "#87898E",
        logo: "#A9DFD8",
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
