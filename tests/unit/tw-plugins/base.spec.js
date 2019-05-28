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
  });

  it('should register base styles', () => {
    theme.mockReturnValue({ 'font-size': '2rem' });
    base({ addBase, theme });
    expect(theme).toBeCalledTimes(6);
    expect(addBase).toBeCalledWith(Object.assign({}, expectedHeaders, fontFace));
  });
});
