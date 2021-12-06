/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

function alphabetSoup(str) {
	let strSplit = str.split("");//change string to an array
	let orderedStrSplit = strSplit.sort();//reorder items in array
	let newString = orderedStrSplit.join("");//turn array back into a string
	let finalString = newString.trim();//trim blank spaces from string
	return finalString;//return string
	
}

console.log(alphabetSoup('carlotta'));