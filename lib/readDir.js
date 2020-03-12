const pify = require("pify");
const readDir = pify(require("fs").readdir);

module.exports = readDir;
