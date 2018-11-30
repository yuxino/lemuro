const pify = require("pify");
const rmrf = pify(require("rimraf"));

module.exports = rmrf;
