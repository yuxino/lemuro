/**
 * parse a `path` to an array
 * eg: hello/world/lemuro -> ['hello', 'hello/world', 'hello/world/lemuro']
 * @param {string} string path to parse
 * @returns {array}
 */
const parseDir = function(path: string) {
  const list = path.split('/');
  return list.map((_, i) => list.slice(0, i + 1).join('/'));
};

export { parseDir };
