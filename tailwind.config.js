/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        coal:       '#0e0d0b',
        ash:        '#1a1814',
        ember:      { DEFAULT: '#c8742a', light: '#e8924a' },
        gold:       '#d4a853',
        cream:      '#f0ebe0',
        bone:       '#c9c2b0',
        mid:        '#6e6658',
        'warm-dark':'#1d150d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
