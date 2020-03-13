import pify from 'pify';
import fs from 'fs';

const readFile = pify(fs.readFile);

/** Promisely Node native api to read file */
export default readFile;
