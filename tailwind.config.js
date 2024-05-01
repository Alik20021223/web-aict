/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenAict: "#00AF66",
        grayAict: "#F2F6FA",
        textBlackAict: "#2E363E",
        primary: "#00AF66",
      },
      fontSize: {
        xs: ['var(--fontSizeXs)', 'var(--fontLeading)'],
        sm: ['var(--fontSizeSm)', 'var(--fontLeadingSm)'],
        base: ['var(--fontSizeBase)', 'var(--fontLeadingBase)'],
        lg: ['var(--fontSizeLg)', 'var(--fontLeadingLg)'],
        xl: ['var(--fontSizeXl)', 'var(--fontLeadingXl)'],
        '2xl': ['var(--fontSize2xl)', 'var(--fontLeading2xl)'],
        '3xl': ['var(--fontSize3xl)', 'var(--fontLeading3xl)'],
        '4xl': ['var(--fontSize4xl)', 'var(--fontLeading4xl)'],
        '5xl': ['var(--fontSize5xl)', 'var(--fontLeading)'],
      },
      fontFamily: {
        Manrope: '"Manrope", sans-serif'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
