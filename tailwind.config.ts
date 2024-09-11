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
        menu: "#001529",
        background: "var(--background)",
        foreground: "var(--foreground)",
        content1_card: "#171821",
        content1: "#2b2b36",
      },
    },
  },
  plugins: [],
};
export default config;
