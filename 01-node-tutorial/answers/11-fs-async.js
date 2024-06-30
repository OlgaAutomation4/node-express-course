const fs = require("fs");
const { readFile, writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileB.txt");

console.log("at start");

writeFile(filePath, "This is line 1\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    // Write the second line
    writeFile(filePath, "This is line 2\n", { flag: "a" }, (err) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        // Write the third line
        writeFile(filePath, "This is line 3\n", { flag: "a" }, (err) => {
          console.log("at point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("All lines written successfully");
          }
            console.log("done with this task");
        });
      }
    });
  }
});

