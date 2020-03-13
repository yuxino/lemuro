import pify from 'pify';
import fs from 'fs';
const access = pify(fs.access);

/**
 * check file or folder whether it's exists
 * @param {string} path target path
 * @returns {Promise<boolean>} if path exists return true, else return false
 */
const isExists = async (path: string) => {
  try {
    await access(path, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

export default isExists;
