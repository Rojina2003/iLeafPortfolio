/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/Frame 47043.png')",
        'side-bg': "url('/sideImgbg.png')"
      },
      backgroundSize:{
        '50%': '50%'
      },
      fontFamily:{
        'primary': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'primary-green': '#81AC40',
        'primary-bg': '#F2F2F3'
      },
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))'
      },
      scrollbar: {
        hide: 'hidden',
        show: 'auto',
      }
    },
  },
  plugins: [],
}

