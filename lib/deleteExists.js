const fs = require("fs");

const deleteExists = async file => {
  if (await isExists(file)) {
    fs.unlink(file, err => {
      if (err) throw err;
    });
  }
};

module.exports = deleteExists;
