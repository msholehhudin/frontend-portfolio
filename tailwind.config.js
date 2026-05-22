/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#080a0e",
          2: "#0d1017",
          3: "#111520",
        },
        surface: "rgba(255,255,255,0.04)",
        "surface-hover": "rgba(255,255,255,0.07)",
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.15)",
        },
        text: {
          1: "#f0f2f8",
          2: "#8b91a8",
          3: "#4e5468",
        },
        accent: {
          DEFAULT: "#4f8ef7",
          2: "#7c6af7",
        },
        green: "#34d399",
        amber: "#f59e0b",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulseDot 2s infinite",
        "scroll-line": "scrollLine 1.5s infinite",
        "shimmer": "shimmer 6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(0.8)" },
        },
        scrollLine: {
          "0%": { opacity: 0, transform: "scaleY(0) translateY(-100%)" },
          "50%": { opacity: 1 },
          "100%": { opacity: 0, transform: "scaleY(1) translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
