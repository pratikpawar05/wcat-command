const fs = require("fs");
const { pathValidator } = require("../helper/pathValidator");
const readline = require("readline");

function displayData(filePath) {
  let lineNumber = 1;
  var rd = readline.createInterface({
    input: fs.createReadStream(filePath),
    console: false,
  });

  rd.on("line", function (line) {
    if (line.length > 0) {
      console.log(lineNumber + ". " + line);
      lineNumber += 1;
    } else {
      console.log(line);
    }
  });
}

function addNumberToNonEmptyLines(filePathName) {
  let { filePath, type } = pathValidator(filePathName);
  if (type == "invalid") {
    console.log("Wrong Path!!", filePath);
    return;
  }
  //   Actual implementation
  displayData(filePath);
}
module.exports = {
  addNumberToNonEmptyLines,
};
