/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      'sm': '499px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1920px',
    },
      colors: {
        white: '#FFFFF0',
        black: '#00000F',
      },
      fontSize: {
        h1: ['28px', { lineHeight: '32px', fontWeight: '900' }],
        h2: ['24px', { lineHeight: '28px', fontWeight: '700' }],
        h3: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        body1: ['16px', { lineHeight: '28px', fontWeight: '500' }],
        body2: ['14px', { lineHeight: '28px', fontWeight: '500' }],
        body3: ['12px', { lineHeight: '28px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
