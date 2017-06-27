//using a pipe function to process a readable and writable file streams
var fs = require('fs');
var zlib = require('zlib'); //used to compress files in a gzip file. 

//parameters accepted by this stream are: directory location of the file , options{encoding, highWaterMark(size of chunks in bits)}
var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip(); //compresses every chunk sent to it. transform data

//perform the same read and write task using PIPE function, which also returns a value of the destination filename
readable.pipe(writable);
readable.pipe(gzip).pipe(compressed); //This is method chaining: A method returns an object so we can keep calling more methods