/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09122C",
        primary: "#B82132",
        text: "#F2EFE7",
        secondary: "#F7B71D",
        background2: "#15234E",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        sofia: ["Sofia Sans"],
        saira: ["Saira Stencil One"],
      },
    },
  },
  plugins: [],
};
