import { getFileType } from '../src';

describe('getFileType', () => {
  it('check mime type', () => {
    expect(getFileType('/Users/gavin/desktop/测试文件/1.md')).toEqual({
      ext: 'md',
      mime: 'text/markdown',
    });
    expect(getFileType('1.md')).toEqual({
      ext: 'md',
      mime: 'text/markdown',
    });

    expect(getFileType('1.txt')).toEqual({
      ext: 'txt',
      mime: 'text/plain',
    });

    expect(getFileType('1.png')).toEqual({
      ext: 'png',
      mime: 'image/png',
    });
  });

  it('check unknow type', async () => {
    expect(getFileType('1')).toEqual({
      ext: 'unknow',
      mime: 'unknow',
    });
  });

  it('check missing type', async () => {
    expect(getFileType('1.')).toEqual({
      ext: 'unknow',
      mime: 'unknow',
    });
  });

  it('check dot type', async () => {
    expect(getFileType('.1')).toEqual({
      ext: 'unknow',
      mime: 'unknow',
    });
  });

  it('chek UPPERCASE ext', async () => {
    expect(getFileType('1.a.MD')).toEqual({
      ext: 'md',
      mime: 'text/markdown',
    });
  });

  it('chek nested ext', async () => {
    expect(getFileType('1.a.md')).toEqual({
      ext: 'md',
      mime: 'text/markdown',
    });
  });
});
