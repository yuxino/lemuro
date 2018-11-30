const pify = require("pify");
const readFile = pify(require("fs").readFile);

module.exports = readFile;
