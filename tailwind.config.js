/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#f0f9f3',
          100: '#dcf4e6',
          200: '#bce8d1',
          300: '#8dd5b3',
          400: '#57be8f',
          500: '#1da22d',
          600: '#1da22d',
          700: '#188c25',
          800: '#14771f',
          900: '#11651b',
        },
      },
    },
  },
  plugins: [],
};
