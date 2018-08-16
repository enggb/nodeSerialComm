//var prompt = require('prompt');
var SerialPort = require('serialport');
var program = require('commander');
const readline = require('readline');

version = "0.0.1"

program
    .version(version)
    .usage('[options] command {args...}')
    .option('-p, --port [port path]', 'path address')
    .option('-b, --baud [siteid]', 'baud rate')
    .option('-r, --read [siteid]', 'flag for read serial')
    .option('-w, --write [siteid]', 'flag for write serial')
    .option('-m, --message [siteid]', 'message')
    .parse(process.argv);



var PORT = program.port
var BAUDRATE = parseInt(program.baud)
var port = new SerialPort(PORT, {baudRate: BAUDRATE});
console.log(PORT +" port is open with baudRate "+ BAUDRATE)


if(program.read){
	//console.log("Receving........")
	port.on('data', function (data) {
	  console.log(data.toString());
	});	
}

if(program.write) {
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout,
	  prompt: 'Serial> '
	});
	rl.prompt();
	rl.on('line', (line) => {
		
	  //console.log("starting sending data...");
	port.write(line, function(err, resp) {
		console.log("data write")
		rl.prompt();
	})
	});
	
}

port.on ('error', function(error) {
  console.log('error: %s', error);
});

port.on('close', function() {
  console.log('port closed');
});

