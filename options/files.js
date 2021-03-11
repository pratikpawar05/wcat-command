const fs = require("fs");
function display(files) {
  for (let file of files) {
    console.log(fs.readFileSync(file, "utf-8"));
  }
}
function insert(file1, file2) {
  fs.writeFileSync(file2, fs.readFileSync(file1, "utf-8"));
  console.log("Done writing!!");
}
function append(file1, file2) {
fs.appendFileSync(file2,fs.readFileSync(file1, "utf-8"));
console.log("Done Appending");
}
function fileOperations(operation) {
  if (operation.includes(">>")) {
    let files = operation.split(">>");
    append(files[0].trim(), files[1].trim());
  } else if (operation.includes(">")) {
    let files = operation.split(">");
    insert(files[0].trim(), files[1].trim());
  } else {
    let files = operation.split(" ");
    display(files);
  }
}

module.exports = {
  fileOperations,
};
