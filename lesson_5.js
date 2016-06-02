/**
 * Functions
 * 
 * Best thing ever
 * Functions are objects (rem everything is an object?)
 */

debugger;

function square(x) {
    return x * x;
};

var funky = function (x) {
    return x * x;
};

var numberToSquare = 10;
(function (x) {
    return x * x;
})(numberToSquare);

(function ($) {
    
})(JQuery)

console.log(square(7));

console.log(funky(7));

// Overloading

debugger;

function tryOverloading(x){
    console.log("first");
}

function tryOverloading(x, y){
    console.log("second");
}

tryOverloading(1);
tryOverloading(1,2);

function add(one, two){
    return one + two;
}

var result = add(1); // Parameter flexibility

var name = "Rom"

function reverse(a){ // by value
    a = a.split('').reverse().join('');
    return a;
}

var result = reverse(a);

var tomCat = {name: "Tommy"};

function reverseObj(p){ // by reference
    p.name = reverse(p.name);
    return p;
}

result = reverseObj(tomCat);
