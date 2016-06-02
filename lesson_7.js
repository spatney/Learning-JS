/**
 * Closure
 * 
 * Functions may be nested
 * Inner functions have access to variableds defined
 * outside of the inner function
 */

debugger;

function scope() {
    var result = 'mmmmmM... when will i be of use';

    setTimeout(function () {
        console.log(result);
    }, 3000);
}

scope();

console.log(window.result);
