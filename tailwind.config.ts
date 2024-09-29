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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        primary: "#313131",
        secondary: "#00665E",
        body: "#6A6A6A",
      },
      borderColor: {
        secondary: "#00665E",
      },
      backgroundColor: {
        secondary: "#00665E",
      },
      screens: {
        xs: "375px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
