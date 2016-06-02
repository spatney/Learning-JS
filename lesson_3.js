/**
 * Objects
 * 
 * Everything except string, number boolean, null and undefined.
 * Collection of properties (Hashtable)
 * Declared with object literal notation
 * No class, but does support template (I lie ... )
 */

debugger;

var empty = {};

console.log(empty.toString());

var tim = new Object();

tim.name = "rob"

console.log(tim.name);

var john = {
    name: "John BI",
    age: 21
}

john.toString = function () {
    return this.name + " is " + this.age + " years old.";
}

console.log(john.toString());

// nest!!!

var person = {
    more:{
        andMore:{
            num: 20
        }
    }
}