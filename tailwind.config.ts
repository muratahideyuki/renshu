// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // テキストのフェードインアニメーション
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
        gradientAnimation: "gradientAnimation 18s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.8" },
        },
        // 背景グラデーションのアニメーション
        gradientAnimation: {
          "0%": { backgroundColor: "rgb(190, 234, 255)" },
          "25%": { backgroundColor: "rgb(199, 255, 227)" },
          "50%": { backgroundColor: "rgb(255, 241, 248)" },
          "75%": { backgroundColor: "rgb(199, 255, 227)" },
          "100%": { backgroundColor: "rgb(190, 234, 255)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
