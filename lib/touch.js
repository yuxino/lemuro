const writeFile = require("./writeFile");
const touch = filePath => writeFile(filePath, "");

module.exports = touch;
