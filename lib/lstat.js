const pify = require("pify");
const lstat = pify(require("fs").lstat);

module.exports = lstat;
