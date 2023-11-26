module.exports = {
  theme: {
    fontFamily: {
      sans: ['PPRightGroteskWideVariable'],
    },
    extend: {
      fontWeight: {},
      colors: {
        primary: '#dee5c6',
        secondary: {
          light: '#3e835a',
          dark: '#236e42',
        },
        'gray-color': '#666a86',
        'red-color': '#ef4343',
      },
      screens: {
        xxxs: '250px',
        xxs: '500px',
        '3xl': '1400px',
        '4xl': '1800px',
        '5xl': '2000px',
        '6xl': '2200px',
      },
      animation: {
        'pulse-slow': 'pulseSlow 2s cubic-bezier(0.4, 0, 0.7, 1) infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '55%': { opacity: '0.85' },
        },
      },
    },
  },
};
