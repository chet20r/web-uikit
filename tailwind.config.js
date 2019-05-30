const {
  plugins: [base],
  fontFamily
} = require('./src/tw-plugins');
module.exports = {
  theme: {
    colors: {
      orange: {
        default: '#B33D26',
        100: '#FFCD00',
        200: '#DE7C00',
        300: '#D86018',
        400: '#B33D26'
      },
      magenta: {
        default: '#E782A9',
        100: '#E782A9',
        200: '#C6007E',
        300: '#991E66',
        400: '#672E45'
      },
      purple: {
        default: '#A699C1',
        100: '#A699C1',
        200: '#6F5091',
        300: '#671E75',
        400: '#51284F'
      },
      blue: {
        default: '#005EB8',
        100: '#56B7E6',
        200: '#0085CA',
        300: '#005EB8',
        400: '#002F6C'
      },
      teal: {
        default: '#59BEC9',
        100: '#59BEC9',
        200: '#009CA6',
        300: '#007C91',
        400: '#005670'
      },
      green: {
        default: '#B7BF10',
        100: '#B7BF10',
        200: '#64A70B',
        300: '#257226',
        400: '#395542'
      },
      cool: {
        default: '#A6BBC8',
        100: '#A6BBC8',
        200: '#5B7F95',
        300: '#425563',
        400: '#253746'
      },
      neutral: {
        default: '#B1B3B3',
        100: '#B1B3B3',
        200: '#5C5C5C',
        300: '#262626',
        400: '#000000'
      },
      warm: {
        default: '#B7A99A',
        100: '#B7A99A',
        200: '#9D968D',
        300: '#776E64',
        400: '#453536'
      },
      white: '#FFF',
      black: '#222',
      transparent: 'transparent'
    },
    fontFamily,
    extend: {},
    variants: {}
  },
  corePlugins: {
    appearance: false
  },
  plugins: [base]
};
