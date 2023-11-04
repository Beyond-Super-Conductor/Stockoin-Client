/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'puck.config.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // keyframes: {
      //   'price-up': {
      //     '0%': { transform: 'scale(1)' },
      //     '50%': { transform: 'scale(1.1)' },
      //     '100%': { transform: 'scale(1)' },
      //   },
      // },
      // animation: {
        
      //   'price-up': 'price-up .3s ease-in-out 3',
      // }
    },
  },
  plugins: [],
}
