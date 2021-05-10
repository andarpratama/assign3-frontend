module.exports = {
  darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         opacity: ['disabled'],
         fontWeight: ['hover', 'focus'],
         screens: {
            'xms': '320px',
            'xmm': '375px',
            'xml': '425px'
         },
         inset: {
            '25': '6.2rem',
            '26': '6.4rem',
            '26-5': '6.5rem',
            '27': '6.6rem',
            '34': '8.4rem',
            '35': '8.6rem',
            '36': '8.8rem',
         },
         width: {
            '97': '24.2rem',
            '98': '24.4rem',
            '99': '24.6rem',
            '99-5': '24.55rem',
            '100': '24.8rem',
            '128': '28rem',
            '128-1': '28.1rem',
            '128-2': '28.2rem',
            '142-2': '42.2rem',
            '142-3': '42.3rem',
            '142-4': '42.4rem',
         }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
