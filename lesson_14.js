/**
 * Date
 * 
 * No literal Syntax
 * Month starts with a zero
 */

debugger;

var birthday = new Date(2010, 10, 26);

console.log(birthday);

console.log(birthday.toUTCString());


var d1 = new Date(2016, 5, 2);
var d2 = new Date(2016, 5, 3);

var diff = d2 - d1;

