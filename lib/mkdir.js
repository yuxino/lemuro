const pify = require("pify");
const mkdir = pify(require("fs").mkdir);

module.exports = mkdir;
