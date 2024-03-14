/* const fname = "paddy"
console.log(fname); */

const fnames = require('./fnames')
const sayHello = require('./sayHelloFunc')
require('./addValuesFunc') // direct execute module

// console.log(fname);

sayHello(fnames.rock)
sayHello(fnames.roman)
sayHello(fnames.john)