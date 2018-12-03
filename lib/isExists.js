const pify = require("pify");
const fs = require("fs");
const access = pify(fs.access);

const isExists = async path => {
  try {
    await access(path, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = isExists;
