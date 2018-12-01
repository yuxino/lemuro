const ncp = require("./ncp");
const rmrf = require("./rmrf");

// 检查目标文件夹是否存在 检查需要被移动的文件夹是否存在
const moveFiles = async (source, destination) => {
  try {
    await ncp(source, destination);
  } catch (e) {
    console.log(e);
  }
  await rmrf(source);
};

module.exports = moveFiles;
