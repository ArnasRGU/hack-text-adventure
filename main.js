rl = require("readline-sync");
fs = require("fs");
sleep = require("sleep")


cheems = fs.readFileSync("imgs/cheems.txt").toString();

function printSlowly(str,delay,i = 0) {
	if (i === str.length-1) {
		process.stdout.write(str[i])
	} else {
		process.stdout.write(str[i])
		setTimeout(printSlowly,delay,str,delay,i+1)
	}
}

printSlowly("hello",100);
printSlowly("hello",100);
printSlowly("hello",100);
printSlowly("hello",100);



