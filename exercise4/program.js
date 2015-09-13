var fs = require('fs');

var filepath = process.argv[2];
var buf = fs.readFile(filepath,'utf8',function(err,data){

if(err){
	console.log("Error");
}
var linetext = data.toString().split('\n');	
console.log(linetext.length-1);
});


