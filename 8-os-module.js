const so = require("os");

const user = so.userInfo();

console.log(user);

console.log(`the system uptime is ${so.uptime} seconds`);

const currentOs = {
  name: so.type(),
  release: so.release(),
  totalMem: so.totalmem(),
  freeMem: so.freemem(),
};

console.log(currentOs);
