var buffer = new ArrayBuffer(8); //in es6 can deal with binary data - raw binary data
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);