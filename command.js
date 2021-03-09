#! /usr/bin/env node
let s = require("./options/removeLineBreak");
let n = require("./options/addNoToAllLines");
let b = require("./options/addNoToNonEmpLines");
let help = require("./options/helper");

let input = process.argv.slice(2);
let command = input[0];
switch (command) {
  case "-n":
    n.addNumberToAllLines(input[1]);
    break;
  case "-b":
    b.addNumberToNonEmptyLines(input[1]);
    break;
  case "-s":
    s.removeLineBreaks(input[1]);
    break;
  case "--help":
    help.helperFn();
    break;
  default:
    help.helperFn();
    break;
}
