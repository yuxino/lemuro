import { mkdir, touch, isDir, rmrf } from '../src';

const TEST_FOLDER = '__tests__/__isDir__';
const TEST_FILE_PATH = `${TEST_FOLDER}/test.txt`;
const NOT_EXISTS_PATH = './qaq';

describe('isDir', () => {
  beforeAll(async () => {
    await mkdir(TEST_FOLDER);
    await touch(TEST_FILE_PATH);
  });
  it('should be a dir', async () => {
    expect(await isDir(TEST_FOLDER)).toBe(true);
  });
  it("should't be a dir", async () => {
    expect(await isDir(TEST_FILE_PATH)).toBe(false);
  });
  it('check not exists path', async () => {
    expect(await isDir(NOT_EXISTS_PATH)).toBe(false);
  });
  afterAll(async () => {
    await rmrf(TEST_FOLDER);
  });
});
