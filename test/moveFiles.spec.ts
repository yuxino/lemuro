import { mkdir, touch, moveFiles, rmrf, isExists } from '../src';

const FOLDER = '__tests__/__Move__';
const TARGET_FOLDER = '__tests__/__TARGET__';

const fileList = ['a.txt', 'b.txt', 'c.txt'];

describe('moveFiles', () => {
  beforeAll(async () => {
    await mkdir(FOLDER);
    console.log('test folder create success');
    const tasks = fileList.map(file => {
      touch(`${FOLDER}/${file}`);
    });
    await Promise.all(tasks);
    console.log('file list create success');
  });
  it('move', async () => {
    await moveFiles(FOLDER, TARGET_FOLDER);
    const res = await Promise.all(
      fileList.map(file => isExists(`${TARGET_FOLDER}/${file}`))
    );
    const isMoveSuccess = res.every(v => v === true);
    expect(isMoveSuccess).toBe(true);
    console.log('test folder move success');
  });
  afterAll(async () => {
    await rmrf(TARGET_FOLDER);
    console.log('test folder deletes success');
  });
});
