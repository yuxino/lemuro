const { parseDir } = require("../lib/utils");

describe("utils", () => {
  describe("parseDir", () => {
    it('should return ["pb", "pb/xx", "pb/xx/xxx"]', () => {
      const dirList = parseDir("pb/xx/xxx");
      expect(dirList).toEqual(["pb", "pb/xx", "pb/xx/xxx"]);
    });
  });
});
