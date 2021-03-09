let fs = require("fs");

function pathValidator(filePath) {
  let res = {};
  try {
      let file = fs.statSync(filePath);
      if (file.isDirectory()) {
        res.type = "invalid";
        res.filePath = null;
      } else {
        res.type = "valid";
        res.filePath = filePath;
    }
  } catch (error) {
    res.type = "invalid";
    res.filePath = null;
  }
  return res;
}

module.exports = {
  pathValidator,
};
