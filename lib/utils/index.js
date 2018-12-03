const parseDir = function(path) {
  const list = path.split("/");
  return list.map((_, i) => list.slice(0, i + 1).join("/"));
};

module.exports = {
  parseDir
};
