/**
 * Null 
 * 
 * Primitive type
 * Represents absense of a value
 * Evaluates to false in boolean expressions
 */

debugger;

var powerbi = null;

if(!powerbi){
    console.log("null evaluates to false");
}

var hasValue = 1; // true, expect 0, null, undefined

if(hasValue){
    console.log("has a value");
}

debugger;

/**
 * Undefined
 * 
 * Primitive
 * Represents unknown valueReturned when non-existant object propery is called
 * unknown value
 * evals to false
 */

var notAssigned;

write(notAssigned);

if(!notAssigned){
    console.log("is false");
}

var person = {
    name: "Lucy"
}

if(!person.lucy){
    console.log("is undefined")
}