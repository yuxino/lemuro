import writeFile from './writeFile';

/**
 * crate a empty file by name
 * name can be a file path
 * @param filePath
 * @returns {Primise<void>}
 */
const touch = (name: string) => writeFile(name, '');

export default touch;
