const pify = require("pify");
const fs = require("fs");

const writeFile = pify(fs.writeFile);

module.exports = writeFile;
