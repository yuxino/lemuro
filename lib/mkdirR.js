const mkdir = require("./mkdir");
const isDir = require("./isDir");
const { parseDir } = require("./utils");

const mkdirR = async path => {
  const dirList = parseDir(path);
  for (let dir of dirList) {
    // skip exists folder
    if (!(await isDir(dir))) {
      await mkdir(dir);
    }
  }
};

module.exports = mkdirR;
