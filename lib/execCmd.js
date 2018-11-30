const pify = require("pify");
const exec = pify(require("child_process").exec);

module.exports = exec;
