import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: '#1A2A55',
        secondary: '#FFCF3F',
        customGrey: '#2B2D30',
        lightGold: '#FAC31C4D',
        lightBlue: '#C4C9E166',
      },
      fontFamily: {
        calm: ['var(--font-calm)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
} satisfies Config
