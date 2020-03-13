import lstat from './lstat';

/**
 * check whether it's a directory
 * @param {string} path target path
 * @returns {Promise<boolean>} if is a directory return true, else return false
 */
const isDir = async (path: string): Promise<boolean> => {
  try {
    const file = await lstat(path);
    return file.isDirectory();
  } catch (e) {
    if (e.code === 'ENOENT') return false;
    else {
      console.error(e);
      return false;
    }
  }
};

export default isDir;
