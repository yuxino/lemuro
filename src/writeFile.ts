const pify = require('pify');
const fs = require('fs');

/**  Promisely Node native api to write file info */
export default pify(fs.writeFile);
