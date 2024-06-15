// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'akzidenz': ['"Akzidenz Grotesque BQ"', 'sans-serif'],
        'gt-sectra': ['"GT Sectra Display"', 'serif'],
      },
      fontSize: {
        'custom': '20px',
      },
      padding: {
        '6': '1.5rem', // Padding with 6 units (1.5rem)
      },
    },
  },
  plugins: [],
};
