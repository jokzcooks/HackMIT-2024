/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        border: "rgb(114,78,144)", // Define the custom border color
        input: "rgb(114,78,144)",
        ring: "rgb(114,78,144)",
        foreground: "#ffffff", // Custom foreground color
        pink: "rgb(235,122,200)",
        purple: "rgb(114,78,144)",
        lavender: "rgb(213,142,223)",
      },
      backgroundImage: {
        'gradient-radiant': 'linear-gradient(45deg, rgb(235,122,200), rgb(114,78,144), rgb(213,142,223))',
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
