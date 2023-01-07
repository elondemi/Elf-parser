var elfy = require('elfy');
var fs = require('fs');
 
var node = fs.readFileSync(process.cwd() + '\\dir');
var elf = elfy.parse(node);
console.log(JSON.stringify(elf))