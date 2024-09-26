const fs = require("fs");
const path = require("path");

const text = fs.readFileSync(
  path.resolve(__dirname, "content", "subfolder", "text.txt"),
  "utf8"
);

fs.writeFileSync(
  path.resolve(__dirname, "content", "result.txt"),
  `Result is: ${text}`,
  { flag: "a" }
);
