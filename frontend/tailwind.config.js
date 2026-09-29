/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#b5cea9",
        "surface-tint": "#96472d",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#221b00",
        "surface-container": "#f5edde",
        "error-container": "#ffdad6",
        "surface": "#fff8ef",
        "on-background": "#1e1b13",
        "on-primary-fixed-variant": "#783119",
        "inverse-surface": "#343026",
        "surface-container-high": "#efe7d9",
        "on-tertiary": "#ffffff",
        "primary-fixed-dim": "#ffb59e",
        "tertiary": "#4c6244",
        "on-tertiary-container": "#f8ffef",
        "on-tertiary-fixed-variant": "#384c30",
        "tertiary-fixed": "#d1eac4",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#657b5b",
        "primary": "#93452b",
        "on-surface-variant": "#55433d",
        "on-primary-container": "#fffbff",
        "primary-fixed": "#ffdbd0",
        "on-secondary": "#ffffff",
        "outline-variant": "#dac1ba",
        "on-primary-fixed": "#3a0b00",
        "on-secondary-container": "#746113",
        "outline": "#88726c",
        "secondary-fixed-dim": "#dec56e",
        "surface-variant": "#e9e2d3",
        "on-surface": "#1e1b13",
        "surface-bright": "#fff8ef",
        "surface-container-highest": "#e9e2d3",
        "secondary-container": "#f8de84",
        "inverse-primary": "#ffb59e",
        "secondary-fixed": "#fbe187",
        "inverse-on-surface": "#f8f0e1",
        "secondary": "#6f5d0e",
        "primary-container": "#b25d41",
        "surface-container-low": "#fbf3e4",
        "background": "#fff8ef",
        "on-tertiary-fixed": "#0d2008",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#554500",
        "surface-dim": "#e1d9cb",
        "dusty-pink": "#EFA7B5",
        "terracotta": "#C96F52"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "container-padding": "24px",
        "gutter": "16px",
        "unit": "4px",
        "stack-gap": "12px"
      },
      fontFamily: {
        "sticker-label": ["'Bricolage Grotesque'", "sans-serif"],
        "body-sm": ["'Inter'", "sans-serif"],
        "body-lg": ["'Inter'", "sans-serif"],
        "headline-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "display-lg": ["'Plus Jakarta Sans'", "sans-serif"],
        "display-mobile": ["'Plus Jakarta Sans'", "sans-serif"]
      },
      fontSize: {
        "sticker-label": ["16px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-mobile": ["36px", { lineHeight: "1.1", fontWeight: "800" }]
      }
    }
  },
  plugins: []
}
