const fs = require("fs");
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileA.txt");

fs.writeFileSync(filePath, "Line 1\n", { flag: "w" }); // 'w' flag is default for write
fs.writeFileSync(filePath, "Line 2\n", { flag: "a" }); // 'a' flag for append
fs.writeFileSync(filePath, "Line 3\n", { flag: "a" }); // 'a' flag for append

const data = fs.readFileSync(filePath, "utf8");
console.log(data);

// const first = readFileSync("./temporary/fileA.txt", "utf8");
// const second = readFileSync("./temporary/fileA.txt", "utf8");

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')
