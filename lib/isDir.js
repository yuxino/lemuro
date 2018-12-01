const lstat = require("./lstat");

const isDir = async path => {
  try {
    const file = await lstat(path);
    return file.isDirectory();
  } catch (e) {
    if (e.code === "ENOENT") return false;
    else console.error(e);
  }
};

module.exports = isDir;
