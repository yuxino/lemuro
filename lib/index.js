const ncp = require("./isDir");
const execCmd = require("./execCmd");
const rmrf = require("./rmrf");
const mkdir = require("./mkdir");
const touch = require("./touch");
const writeFile = require("./writeFile");
const moveFiles = require("./moveFiles");
const readFile = require("./readFile");
const lstat = require("./lstat");
const isDir = require("./isDir");
const isExists = require("./isExists");
const mkdirR = require("./mkdirR");

module.exports = {
  ncp,
  execCmd,
  rmrf,
  mkdir,
  touch,
  writeFile,
  moveFiles,
  readFile,
  lstat,
  isDir,
  isExists,
  mkdirR
};
