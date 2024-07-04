/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a290fc',
        main: '#050505',
        bgc: '#161616',
        bgb: '#191919',
        text: '#999999',
        title: '#E6E6E6',
        span: '#CCCCCC',
      },
    },
  },
  plugins: [],
}
