import isExists from './isExists';
import rmrf from './rmrf';

/**
 * deltet file or folder if it's exists
 * @param {string} path target path
 * @return {Promise<void>}
 */
const deleteExists = async (path: string): Promise<void> => {
  if (await isExists(path)) {
    await rmrf(path);
  }
};

export default deleteExists;
