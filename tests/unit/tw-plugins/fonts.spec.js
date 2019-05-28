import fs from 'fs';
import path from 'path';

import { fontFaceDeclarations, fontFamily } from '@/tw-plugins/fonts';
import expectedFontFaces from './fonts.fixture';

jest.mock('fs');
jest.mock('path');

describe('Font Face & Font Family Generator', () => {
  describe('Font Face', () => {
    beforeAll(() => {
      const fileNames = [
        'AnkoModerat-Bold.otf',
        'AnkoModerat-Bold.woff',
        'AnkoModerat-Bold.woff2',
        'AnkoModerat-Light.otf',
        'AnkoModerat-Light.woff',
        'AnkoModerat-Light.woff2',
        'AnkoModerat-Icon.eot',
        'AnkoModerat-Icon.ttf'
      ];
      path.join.mockReturnValue('/assets/fonts');
      fs.readdirSync.mockReturnValue(fileNames);
    });

    it('should read the fonts from font directory', () => {
      fontFaceDeclarations();
      expect(fs.readdirSync).toHaveBeenCalledTimes(1);
      expect(path.join).toHaveBeenCalledTimes(1);
    });

    it('should output font declarations', () => {
      const fontFaces = fontFaceDeclarations();
      expect(fontFaces).toEqual(expectedFontFaces);
    });

    it('should skip files with unknown file types', () => {
      const fileNames = ['a', 'b'];
      fs.readdirSync.mockReturnValue(fileNames);

      const fontFaces = fontFaceDeclarations();
      expect(fontFaces).toEqual([]);
    });
  });

  describe('Font Family', () => {
    it('should generate font family mapping', () => {
      const fileNames = ['AnkoModerat-Bold.otf', 'AnkoModerat-Bold.woff', 'AnkoModerat-Icon.eot'];
      fs.readdirSync.mockReturnValue(fileNames);
      const family = fontFamily();
      expect(family).toEqual({ 'anko-bold': 'AnkoBold', 'anko-icon': 'AnkoIcon' });
    });
  });
});
