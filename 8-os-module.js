const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(`the computer works ${os.uptime() / 60} minutes`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);