const pify = require("pify");
const ncp = pify(require("ncp").ncp);

module.exports = ncp;
