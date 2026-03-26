import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f5f1ec",
        espresso: "#3b2f2f",
        gold: "#c9a66b"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
