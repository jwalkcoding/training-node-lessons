var fs = require('fs');

//parameters accepted by this stream are: directory location of the file , options{encoding, highWaterMark(size of chunks in bits)}
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//Listening to the data event starts the stream reading. 
readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});