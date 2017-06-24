var EventEmitter = require('events');
var util = require('util'); //core node module that contains useful javascript utilities

function Greetr() {
    EventEmitter.call(this); //inherits from the Parent Class or Function Constructor
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter); //extends EventEmitter (properties and methods)

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');