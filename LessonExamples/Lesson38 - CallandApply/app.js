//Call and apply

var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();
//call and apply give the programmer the ability to change what the "this" key word points to
obj.greet.call({ name: 'Jane Doe' }); //pass parameters
obj.greet.apply({ name: 'Jane Doe' }); //pass parameters as an array