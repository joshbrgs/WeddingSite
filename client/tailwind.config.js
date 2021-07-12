/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        primaryAccent: 'var(--primary-accent)',
        neutral: 'var(--neutral)',
        secondaryAccent: 'var(--secondary-accent)',
        bg2: 'var(--bg2)',
      },
      backgroundImage: () => ({
        'hero-image': "url('./img/example1.jpeg')",
      }),
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [],
};