import { mkdir, touch, isExists, rmrf } from '../src';

const TEST_FOLDER = '__tests__/__isExists__';
const TEST_FILE_PATH = `${TEST_FOLDER}/test.txt`;

describe('isExists.spec', () => {
  beforeAll(async () => {
    await mkdir(TEST_FOLDER);
    await touch(TEST_FILE_PATH);
  });
  it('should be exist', async () => {
    expect(await isExists(TEST_FILE_PATH)).toBe(true);
  });
  it("should't be exist", async () => {
    expect(await isExists('bababalsdlasdladl.fuck')).toBe(false);
  });
  afterAll(async () => {
    await rmrf(TEST_FOLDER);
  });
});
