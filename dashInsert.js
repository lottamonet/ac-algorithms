/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(num){
  let newArr = num.toString().split('');
  let numStr = "";
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] % 2 === 1 && newArr[i+1] % 2 === 1){
     numStr += newArr[i] + '-';
    } else {
      numStr += newArr[i];
    }
  }
   return numStr; 
}
  
 var result = dashInsert(5769302);
      console.log(result);


var result2 = dashInsert(454793);
console.log(result2);