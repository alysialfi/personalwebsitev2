module.exports = {
  mode: 'jit',
  purge: ['app/**/*.tsx'],
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          bg: '#276FA4'
        },
        white: {
          default: '#FFFFFF',
          font: '#FCFCFC'
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'reverse-spin': 'reverse-spin 7s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
