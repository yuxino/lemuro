const mkdir = require("../lib/mkdir");
const touch = require("../lib/touch");
const isDir = require("../lib/isDir");
const rmrf = require("../lib/rmrf");

const TEST_FOLDER = "__tests__/isDir";
const TEST_FILE_PATH = `${TEST_FOLDER}/test.txt`;

describe("isDir", () => {
  beforeAll(async () => {
    await mkdir(TEST_FOLDER);
    await touch(TEST_FILE_PATH);
  });
  it("should be a dir", async () => {
    expect(await isDir(TEST_FOLDER)).toBe(true);
  });
  it("should't be a dir", async () => {
    expect(await isDir(TEST_FILE_PATH)).toBe(false);
  });
  afterAll(async () => {
    await rmrf(TEST_FOLDER);
  });
});
