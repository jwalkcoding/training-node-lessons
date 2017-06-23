var util = require('util');
'use strict';

//es 6 Class creation

class Person { //Simplified way to write a constructor(Class Creator)
    constructor(firstname, lastname) { //Constructor  params only used when object is created "new" keyword used
            this.firstname = firstname;
            this.lastname = lastname;
        }
        //everthing in this area will be added to the prototype chain
    greet() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname); //replaces prototype
    }
}




class Policeman extends Person { //use extends to point to the parent class
    constructor(firstname, lastname) {
        super(firstname, lastname); // inherit from the parent class replacing "Person.call(this) in function constructors"
        this.badgenumber = 1234;
    }
}



// var john = new Person();
// john.greet();

//util.inherits(Policeman, Person); //connected the protypes - Replaced by "extends" key word

var officer = new Policeman('Jay', 'Walker'); //called only the Policeman function "Person.Call"  was used to in the Policeman function constructror to get props and methods from Person

officer.greet();