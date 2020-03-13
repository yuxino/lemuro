import pify from 'pify';
import { lstat } from 'fs';

/** Promisely Node native api to get file info */
export default pify(lstat);
