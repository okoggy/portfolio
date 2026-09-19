/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#edf5ff",
        ink: {
          DEFAULT: "#0a0f18",
          muted: "rgba(10, 15, 24, 0.72)",
          subtle: "rgba(10, 15, 24, 0.52)",
        },
      },
      fontFamily: {
        sans: ["var(--font-albert-sans)", "sans-serif"],
        mono: ["var(--font-fragment-mono)", "monospace"],
      },
      transitionTimingFunction: {
        hero: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
