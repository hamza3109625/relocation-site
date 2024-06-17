/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'ash-black': '#222',
        white: '#fafafa',
        sky: '#00ccff',
        green: '#22dddd',
        blue: '#1300ff',
        dusk: '#6600ff',
        purple: '#9900ff',
        pink: '#ff0066',
        red: '#fe0222',
        yellow: '#ffbb00',

        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
};
