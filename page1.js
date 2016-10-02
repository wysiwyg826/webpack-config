// page1

// require(log);
console.log("i'm page1.");
// log("i'm page1.");
// 
for(var i = 0; i < 10; i++) {
	console.log("i ", i);
}
require('./res/css/page1.css');
var log1 = require('./w');

log1("this is page1");