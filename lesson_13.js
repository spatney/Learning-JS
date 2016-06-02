/**
 * Regular Expression
 * 
 * A tool for string pattern matching
 * Used to search, replace and extract parts of strings
 * Most characters match themselves
 * Character classses match classes of characters
 *      \w any work characters
 *      \d decimal digit
 * Match a set of characters []
 * . matches any characters
 * {} quantifies a match (.{2} matches any two characters)
 * () makes a capturing group
 * \excapes special characters
 * Regular Expression Pattenr /pattern/
 */
debugger;

// search
var result = "abcde".search(/c/);

//exec
var input = "Text with some <strong>highlighter</strong> parts";
var expression = /<strong>(.*)<\/strong>/;

result = expression.exec(input);

//test
var bool = /\d/.test('hasNumber2');


// replace with capture groups
var updated = "Sachin Patney".replace(/(\w+) (\w+)/g, function (match, c1, c2) {
    return c2.toUpperCase() + ", " + c1; 
});