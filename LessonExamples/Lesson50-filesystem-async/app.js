var fs = require('fs'); //deals with the file system
//synchronus approach to reading the file; meaning it will wait until the buffer is filled before
//the V8 engine moves on to the next line of code. will slow your app down if you have a lot of users
//useful for setting up code using a config file. 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); //looks at file and uses the binary data
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', //asychronus way to look at file faster 
    function(err, data) {
        console.log(data);
    });

console.log('Done!');

//This method is using a buffer need a way to minimize the amount of data being stored in the buffer. 
//alway use a asycn method to build a more performant application.