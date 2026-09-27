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
        navy: {
          50: "#f0f4fa",
          100: "#e0e9f4",
          200: "#c2d4ea",
          300: "#94b6dc",
          400: "#5e91c9",
          500: "#3972b4",
          600: "#275896",
          700: "#1e4478",
          800: "#153057",
          900: "#0A1F44", // Brand Primary Navy (#0A1F44)
          950: "#06132b",
        },
        gold: {
          50: "#fdfbf2",
          100: "#faf4df",
          200: "#f5e7b8",
          300: "#efd489",
          400: "#f8c864",
          500: "#F5B940", // Brand Warm Gold (#F5B940)
          600: "#d99718",
          700: "#b5740f",
          800: "#915812",
          900: "#774712",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(245, 185, 64, 0.35)",
        "gold-lg": "0 10px 30px -4px rgba(245, 185, 64, 0.45)",
        navy: "0 10px 30px -5px rgba(10, 31, 68, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
