var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}
Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

function Policeman() {
    Person.call(this); // this line was added so the object can inherit Person since it was never called
    this.badgenumber = 1234;
}

util.inherits(Policeman, Person);

var officer = new Policeman(); //called only the Policeman function "Person.Call"  was used to in the Policeman function constructror to get props and methods from Person

officer.greet();