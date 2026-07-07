import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-soft": "var(--background-soft)",
        "background-section": "var(--background-section)",
        blush: "var(--blush)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "accent-soft": "var(--accent-soft)",
        accent: "var(--accent)",
        "neutral-light": "var(--neutral-light)",
        foreground: "var(--foreground)",
        body: "var(--body)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
        playfair: ["var(--font-playfair)"],
        script: ["var(--font-script)"],
      },
      boxShadow: {
        glow: "0 20px 44px rgba(251, 207, 202, 0.22)",
        card: "0 8px 30px rgba(251, 207, 202, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        glow: "pulseGlow 7s ease-in-out infinite",
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2rem",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 16% 14%, rgba(251, 207, 202, 0.42), transparent 34%), radial-gradient(circle at 84% 9%, rgba(249, 158, 203, 0.32), transparent 30%), radial-gradient(circle at 78% 76%, rgba(160, 229, 255, 0.24), transparent 28%), linear-gradient(180deg, #fff7f6 0%, #ffffff 48%, #fff2f1 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
