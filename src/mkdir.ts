import pify from 'pify';
import fs from 'fs';

const mkdir = pify(fs.mkdir);

/** Promisely Node native api to create folder */
export default mkdir;
