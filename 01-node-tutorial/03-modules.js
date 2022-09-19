// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
//module to get the names 
const sayHi = require('./05-utils')
//module to get the function (which prints hello there name)
const data = require('./06-alternative-flavor')
//We can use the modules without assign a variable
require('./07-mind-grenade')
console.log(data);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
