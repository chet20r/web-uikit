import base from '@/tw-plugins/base';
import { fontFaceDeclarations } from '@/tw-plugins/fonts';

jest.mock('@/tw-plugins/fonts');

describe('Base Styles Tailwind Plugin', () => {
  let addBase;
  let theme;
  const fontFace = {
    '@font-face': {
      fontFamily: 'AnkoBold',
      src:
        "url('assets/fonts/AnkoModerat-Bold.otf') format('truetype'), url('assets/fonts/AnkoModerat-Bold.woff') format('woff'), url('assets/fonts/AnkoModerat-Bold.woff2') format('woff2')"
    }
  };

  const expectedHeaders = {
    h1: { fontSize: { 'font-size': '2rem' } },
    h2: { fontSize: { 'font-size': '2rem' } },
    h3: { fontSize: { 'font-size': '2rem' } },
    h4: { fontSize: { 'font-size': '2rem' } },
    h5: { fontSize: { 'font-size': '2rem' } },
    h6: { fontSize: { 'font-size': '2rem' } }
  };

  beforeAll(() => {
    addBase = jest.fn();
    theme = jest.fn();
    fontFaceDeclarations.mockReturnValue(fontFace);
    theme.mockReturnValue({ 'font-size': '2rem' });
    base({ addBase, theme });
  });

  it('should register base styles', () => {
    expect(addBase).toBeCalledWith(Object.assign({}, expectedHeaders, fontFace));
  });

  it('should call theme with fontsize parameters', () => {
    const expectedArguments = [
      'fontSize.5xl',
      'fontSize.4xl',
      'fontSize.3xl',
      'fontSize.6xl',
      'fontSize.2xl',
      'fontSize.xl'
    ];
    expect(theme).toBeCalledTimes(6);
    expectedArguments.forEach(e => expect(theme).toBeCalledWith(e));
  });
});
