/**
 * Arguments & Recursion
 */

debugger;

function argumentsType() {
    var args = arguments;
    
    return typeof arguments;
}

var t = argumentsType();

argumentsType("1",2,{x:2});

/**
 * Recursion
 * 
 * Calls itself
 * Be sure to have a termination clause
 */

function factorial(n) {
    if(n===0||n===1){
        return 1;
    }
    
    return n * factorial(n-1);
}

var r = factorial(5);