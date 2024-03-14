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

// FS module 'sync'
const { readFileSync, writeFileSync, read } = require('fs')

console.log(readFileSync('./parent/file.txt', 'utf8')) // read file
console.log(readFileSync('./parent/child/file.txt', 'utf8'))
writeFileSync('./parent/generatedFile.txt', 'Hey!') // create file

// FS module 'Async'
const { readFile, writeFile } = require('fs')

readFile('./parent/file.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
})

writeFile('./parent/file-async.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
})