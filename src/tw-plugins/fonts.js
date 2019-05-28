const fs = require('fs');
const path = require('path');

const fontExtensionToFormatMap = {
  woff: 'woff',
  woff2: 'woff2',
  otf: 'truetype',
  ttf: 'truetype',
  eot: ''
};

const fileNames = () => fs.readdirSync(path.join(__dirname, '/../assets/fonts'));

/**
 * A array reducer that returns an object with key as the filename (without extension)
 * and value as an array of available extension types
 * e.g.
 * ```
 *   {
 *      'AnkoModerat-Regular': ['woff', 'woff2', 'ttf'],
 *      'AnkoModerat-Icon': ['woff', 'woff2', 'eot']
 *   }
 * ```
 */
const fileToExtensionMap = (prev, curr) => {
  const [fileName, ext] = curr.split('.');
  prev[fileName] ? prev[fileName].push(ext) : (prev[fileName] = [ext]);
  return prev;
};

/**
 * Returns font face declarations in css-in-js format for all the files
 * e.g.
 * ```
 * {
 *    '@font-face': {
 *      fontFamily: 'AnkoIcon',
 *      src:
 *        "url('assets/fonts/AnkoModerat-Icon.eot'), url('assets/fonts/AnkoModerat-Icon.ttf') format('truetype')"
 *    }
 *  }
 * ```
 */
const fontFaceDeclarations = () => {
  const supportedTypes = Object.keys(fontExtensionToFormatMap);
  const fileExtMap = fileNames()
    .filter(e => supportedTypes.indexOf(e.split('.').pop()) !== -1)
    .reduce(fileToExtensionMap, {});
  return Object.keys(fileExtMap).map(e => ({
    '@font-face': {
      fontFamily: `Anko${e.split('-').pop()}`,
      src: fileExtMap[e]
        .map(x => {
          const url = `url('assets/fonts/${e}.${x}')`;
          const format = fontExtensionToFormatMap[x]
            ? ` format('${fontExtensionToFormatMap[x]}')`
            : '';
          return `${url}${format}`;
        })
        .join(', ')
    }
  }));
};

/**
 * Returns a font family mapping with font name as key and font face as the value
 * e.g.
 * ```
 *   'anko-regular': 'AnkoRegular',
 *   'anko-condensed-bold': 'AnkoCondensedBold'
 * ```
 *
 */
const fontFamily = () =>
  fontFaceDeclarations()
    .map(e => e['@font-face'].fontFamily)
    .reduce((prev, curr) => {
      const fontClass = curr
        .split('')
        .map((e, idx) => {
          return idx === 0 ? e.toLowerCase() : e.toUpperCase() === e ? `-${e.toLowerCase()}` : e;
        })
        .join('');
      prev[fontClass] = `${curr}`;
      return prev;
    }, {});

module.exports = { fontFaceDeclarations, fontFamily, fontExtensionToFormatMap };
