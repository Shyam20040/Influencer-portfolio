/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        smoke: '#f5f5f5',
        gold: '#d4af37',
        graphite: '#141414',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(0, 0, 0, 0.38)',
        glow: '0 0 0 1px rgba(212, 175, 55, 0.18), 0 20px 60px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        'gold-radial':
          'radial-gradient(circle at top, rgba(212,175,55,0.22), rgba(212,175,55,0) 42%)',
      },
    },
  },
  plugins: [],
}
