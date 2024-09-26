const lodash = require("lodash");

const arr = [1, [2, [3, [4, [5]]]]];

const result = lodash.flattenDeep(arr);
console.log(result);
