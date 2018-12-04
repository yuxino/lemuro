const fs = require("fs");

const delteExists = async file => {
  if (await isExists(file)) {
    fs.unlink(file, err => {
      if (err) throw err;
    });
  }
};

module.exports = delteExists;
