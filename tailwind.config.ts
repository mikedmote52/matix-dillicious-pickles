import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/config/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        rounded: ["var(--font-rounded)", "ui-rounded", "system-ui", "sans-serif"]
      },
      colors: {
        pickle: {
          50: "#f5ffe8",
          100: "#e7ffc7",
          300: "#a9ea62",
          500: "#5ea62d",
          700: "#34651f"
        }
      }
    }
  }
};

export default config;

