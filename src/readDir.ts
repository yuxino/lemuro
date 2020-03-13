import pify from 'pify';
import fs from 'fs';

/** Promisely Node native api to read directory */
export default pify(fs.readdir);
