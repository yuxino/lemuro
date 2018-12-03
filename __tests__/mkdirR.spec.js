const mkdirR = require("../lib/mkdirR");
const isDir = require("../lib/isDir");
const rmrf = require("../lib/rmrf");
const { parseDir } = require("../lib/utils");

const TEST_PATH = "__tests__/pb";
const TEH_PATH = `${TEST_PATH}/xx/xxx`;

describe("mkdirR", () => {
  it("should create folders success", async () => {
    await mkdirR(TEH_PATH);
    console.log("folder create success !");
    const dirList = parseDir(TEH_PATH);
    const isAllDir = await Promise.all(dirList.map(isDir));
    expect(isAllDir.every(flag => flag === true)).toBe(true);
  });
  afterAll(async () => {
    await rmrf(TEST_PATH);
    console.log("delete test folder success");
  });
});
