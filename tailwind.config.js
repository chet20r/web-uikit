const { fontFaceDeclarations, fontFamily } = require('./src/assets/styles');

module.exports = {
  theme: {
    fontFamily,
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addBase }) {
      addBase(fontFaceDeclarations);
    }
  ]
};
