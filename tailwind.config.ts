import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2F5233",
          foreground: "#ffffff",
          hover: "#1F3722",
        },
        secondary: {
          DEFAULT: "#A4BE7B",
          foreground: "#ffffff",
          hover: "#94AE6B",
        },
        accent: {
          DEFAULT: "#E5D9B6",
          foreground: "#2F5233",
        },
        muted: {
          DEFAULT: "#285430",
          foreground: "#ffffff",
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;