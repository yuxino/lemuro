import fs from 'fs';
import isExists from './isExists';

/**
 * deltet file or folder if it's exists
 * @param {string} path target path
 * @return {Promise<void>}
 */
const deleteExists = async (path: string): Promise<void> => {
  if (await isExists(path)) {
    fs.unlink(path, err => {
      if (err) throw err;
    });
  }
};

export default deleteExists;
