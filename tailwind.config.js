/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#141c2f",
        lightMode: "#f5f9ff",
        cardBackground : '#1f2a48',
        buttonBg : '#0078ff' ,
        cardBackgroundLight : '#fefefe'
      },
    },
  },
  plugins: [],
};
