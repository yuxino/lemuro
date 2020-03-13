import ncp from './ncp';
import rmrf from './rmrf';

/**
 * Asynchronous recursive file copying with Node.js
 * @param {string} source target to be move
 * @param {string} destination the destination for target be move
 * @returns {Promise<void>}
 */
const moveFiles = async (
  source: string,
  destination: string
): Promise<void> => {
  try {
    await ncp(source, destination);
  } catch (e) {
    console.error(e);
  }
  await rmrf(source);
};

export default moveFiles;
