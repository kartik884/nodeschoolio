var fs = require('fs');

var filepath = process.argv[2];
var buf = fs.readFileSync(filepath);
var linetext = buf.toString().split('\n');

console.log(linetext.length-1);