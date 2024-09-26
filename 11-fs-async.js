const fs = require("fs");
const path = require("path");

const textPath = path.resolve(__dirname, "content", "subfolder", "text.txt");
const newTextPath = path.resolve(__dirname, "content", "newText.txt");
fs.readFile(textPath, "utf-8", (err, result) => {
  if (err) {
    throw new Error();
  }
  const readResult = result;
  console.log(readResult);
  fs.writeFile(
    newTextPath,
    `There is awesome result: ${readResult}`,
    {
      flag: "a",
    },
    (err, result) => {
      if (err) {
        throw new Error();
      }
      const newFileResult = result;
      fs.readFile(newTextPath, "utf-8", (err, result) => {
        if (err) {
          throw new Error();
        }
        console.log(result);
      });
    }
  );
});
