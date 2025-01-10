import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueColor: "#3B82F6",
        darkBlue: "#1D4ED8",
        teal: "#34D399",
        lightgray: "#F3F4F6",
        darkgray: "#1F2937",
        darkGray2: "#333333",
        lightGray2: "#6B7280",
        accentYellow: "#F59E0B",
        greenColor: "#10B981",
        redColor: "#EF4444",
        lightBlue: "#93C5FD",
        purpleColor: "#8B5CF6",
        headerBlue: "#002233"
      },
    },
  },
  plugins: [],
} satisfies Config;
