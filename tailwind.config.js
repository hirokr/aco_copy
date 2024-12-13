/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      mono: "var(--font-montserrat)",
      open: "var(--font-open-sans)",
    },
    extend: {
			aspectRatio: {
        square: '1 / 1',
      },
      boxShadow: {
        inset: "inset 0 0 0 5em #00aeef",
      },
      backgroundImage: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#fff",
        color: "#6f7a82;",
        dark: "#2252811a",

        compo: {
          DEFAULT: "#5e707d",
          content: "#6f7a82",
          desc: "#2e3235",
          awardTitle: "#686868",
          card_title: "#2f3336",
        },

        accent: {
          DEFAULT: "#00aeef",
          text: "#fff",
          grad: "",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
};
