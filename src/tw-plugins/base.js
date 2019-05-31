const { fontFaceDeclarations } = require('./fonts');

const header = theme => ({
  h2: { fontSize: theme('fontSize.5xl') },
  h3: { fontSize: theme('fontSize.4xl') },
  h4: { fontSize: theme('fontSize.3xl') },
  h1: { fontSize: theme('fontSize.6xl') },
  h5: { fontSize: theme('fontSize.2xl') },
  h6: { fontSize: theme('fontSize.xl') }
});

module.exports = ({ addBase, theme }) =>
  addBase(Object.assign({}, header(theme), fontFaceDeclarations()));
