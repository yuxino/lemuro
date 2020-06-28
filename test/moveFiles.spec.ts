import { mkdir, touch, moveFiles, rmrf, isExists } from '../src';

const FOLDER = '__tests__/__Move__';
const TARGET_FOLDER = '__tests__/__TARGET__';

const fileList = ['a.txt', 'b.txt', 'c.txt'];

describe('moveFiles', () => {
  beforeAll(async () => {
    await mkdir(FOLDER);
    const tasks = fileList.map(file => touch(`${FOLDER}/${file}`));
    await Promise.all(tasks);
  });
  it('move', async () => {
    await moveFiles(FOLDER, TARGET_FOLDER);
    const res = await Promise.all(
      fileList.map(file => isExists(`${TARGET_FOLDER}/${file}`))
    );
    const isMoveSuccess = res.every(v => v === true);
    expect(isMoveSuccess).toBe(true);
  });
  afterAll(async () => {
    await rmrf(TARGET_FOLDER);
  });
});
