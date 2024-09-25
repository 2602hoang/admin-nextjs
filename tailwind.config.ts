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
        Brown: "#171821",
        background: "var(--background)",
        foreground: "var(--foreground)",
        Dark_Slate_Gray: "#21222D",
        Light_Gray: "#88888c4d",
        Gray_menu: "#87898E",
        Light_Teal: "#A9DFD8",
        Light_Gray_text: "#a0a0a0",
        Darker_Gray: "#2C2D33",
        Gold: "#FCB859",
        Light_Pink: "#f2c8ed",
        Sky_Blue: "#20aef3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
