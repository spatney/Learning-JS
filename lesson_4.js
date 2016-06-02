/**
 * Equality
 * 
 * Just like snowflakes no two objects are equal.
 * Primitives can be ["CopyCat" === "CopyCat"]
 * Two sets of quality == and ===
 */

debugger;
var piper = {name: "Piper"};

console.log("Piper equals piper " + piper === piper);

var evilTwin = {name: "Piper"};

console.log(evilTwin === piper);

console.log("apple" === "apple");
console.log("apple" === "pineapple");
console.log(10===10)
console.log(1!==2)

console.log(1=="1")