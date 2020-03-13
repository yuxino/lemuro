import mkdir from './mkdir';
import isDir from './isDir';
import { parseDir } from './utils';

/**
 * parse a `path` and create directory deep
 * eg: hello/world/lemuro will create
 * three folders -> 'hello', 'hello/world', 'hello/world/lemuro'
 * @param {string} string path to parse
 * @returns {void}
 */
const mkdirR = async (path: string) => {
  const dirList = parseDir(path);
  for (let dir of dirList) {
    // skip exists folder
    if (!(await isDir(dir))) {
      await mkdir(dir);
    }
  }
};

export default mkdirR;
