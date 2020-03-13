import pify from 'pify';
import child_process from 'child_process';

/**
 * deltet file or folder if it's exists
 * @param {string} path target path
 */
export default pify(child_process.exec);
