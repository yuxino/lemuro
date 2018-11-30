const lstat = require("./lstat");

const isDir = async path => {
  const file = await lstat(path);
  return file.isDirectory();
};

module.exports = isDir;
