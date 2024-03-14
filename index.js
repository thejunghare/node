/* const fname = "paddy"
console.log(fname); */

const fnames = require('./fnames')
const sayHello = require('./sayHelloFunc')
require('./addValuesFunc') // direct execute module

// console.log(fname);

sayHello(fnames.rock)
sayHello(fnames.roman)
sayHello(fnames.john)

// built in module
const os = require('os')
console.log(os.userInfo()) // get user info
console.log(os.uptime()); // get system uptime in seconds

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);

// PATH module
const path = require('path')

console.log(path.sep);
console.log(path.join('/parent', 'child', 'file.txt'));
console.log(path.basename(path.join('/parent', 'child', 'file.txt')));