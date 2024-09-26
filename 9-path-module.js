const path = require("path");

const filePath = path.join("/content", "/subfolder", "/text.txt");

const base = path.basename(filePath);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);

console.log(absolutePath);
