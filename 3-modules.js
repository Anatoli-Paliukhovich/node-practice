const names = require("./4-names");
const { peter, susan } = names;
const sayName = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
console.log(data);
sayName(peter);
sayName(susan);
