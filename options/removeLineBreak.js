const fs = require("fs");
const { pathValidator } = require("../helper/pathValidator");
const readline = require("readline");

function displayData(filePath) {
  let str = "";
  var rd = readline.createInterface({
    input: fs.createReadStream(filePath),
    console: false,
  });

  rd.on("line", function (line) {
    if (line.length > 0) {
      str += line + " ";
    } else {
    }
  });
  rd.on("close", () => {
    console.log(str);
  });
}

function removeLineBreaks(filePathName) {
  let { filePath, type } = pathValidator(filePathName);
  if (type == "invalid") {
    console.log("Wrong Path!!", filePath);
    return;
  }
  //   Actual implementation
  displayData(filePath);
}
module.exports = {
  removeLineBreaks,
};
