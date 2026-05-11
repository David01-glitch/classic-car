/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        cream: '#f5efe2',
        burnt: '#cc5500',
        gold: '#d4af37',
        racing: '#c8102e',
        chrome: '#c4c4c4',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 25px 60px -20px rgba(0,0,0,0.4)',
        soft: '0 10px 40px -10px rgba(204,85,0,0.25)',
      },
      backgroundImage: {
        'metallic-gold': 'linear-gradient(135deg,#d4af37 0%,#f5d76e 50%,#a17c1b 100%)',
        'chrome-grad': 'linear-gradient(135deg,#e8e8e8 0%,#9a9a9a 50%,#e8e8e8 100%)',
      },
    },
  },
  plugins: [],
};
