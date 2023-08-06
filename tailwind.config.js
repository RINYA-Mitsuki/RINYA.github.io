/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-background': "url('../../public/BackGround.jpg')"
      },
      colors: {
        mygreen: {
          wh: '#E1F5DE',
          li: '#B5F5AB',
          DEFAULT: '#8BF57A',
          dk: '#394D36',
          bk: '#131A12',
        }
      }
    },
  },
  plugins: [],
}
