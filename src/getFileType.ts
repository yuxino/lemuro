import mime from 'mime';

/**
 * Asynchronous recursive file copying with Node.js
 * @param {string} path target to be get mimetype
 */
export default async function getFileType(path: string) {
  // check start with dot
  if (path.startsWith('.')) return { ext: 'unknow', mime: 'unknow' };

  const mime_type = mime.getType(path);
  return {
    ext: path.match(/\.([^.]+)$/)?.[1].toLowerCase() || 'unknow',
    mime: mime_type || 'unknow',
  };
}
