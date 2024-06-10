/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 2px 10px 0 rgba(0,0,0,0.2),",
        "4xl": "0 0 3px 1px rgba(0,0,0,0.2)",
        "5xl": "0 0 5px 3px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        sans: ["El_Messiri", "sans-serif"],
        serif: ["Manrope", "serif"],
      },
      colors: {
        // regalgray: "#f4f4f4",

        black: "#000000",
        bgftr: "rgb(50, 50, 50)",
        textwhite: "rgb(255, 255, 255);",
        temnogreen: "#1f2e4d",
        salesgreen: "#2d4156",
        // green: "rgb(101,193,46)",
        green: "#B233FF",
        "dark-green": "#215713",
        "mint-green": "#BDFFB8",
        white: "#FFFCF6",
        "white-smoke": "#F8F8F8",
        "baby-powder": "#FFFCF6",
        azure: "#EAFAF7",
        solitude: "#EFF1F3",
        gray: "#807B70",
        "dark-gray": "#817B70",
        "light-gray": "#D9D9D9",
        orange: "#DB9E30",
        blue: "#53B0F8",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },

  plugins: [
    // ...
    // require('@tailwindcss/aspect-ratio'),
  ],
};
