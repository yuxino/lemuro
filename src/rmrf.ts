import pify from 'pify';
import rmrf from 'rimraf';

/** Promisely rimraf to do something like linux rm -rf command */
export default pify(rmrf);
