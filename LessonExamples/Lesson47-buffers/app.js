var buf = new Buffer('Hello', 'utf8'); //size and encoding are params passed utf8 is default.

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());