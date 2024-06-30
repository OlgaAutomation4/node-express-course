// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const greet = require('./05-utils')
const flavor = require('./06-alternative-flavor')
require('./07-mind-grenade')
greet('Alex')
greet(names.kat)
greet(names.moss)
console.log("Name:", flavor.name);
console.log("Age:", flavor.age);