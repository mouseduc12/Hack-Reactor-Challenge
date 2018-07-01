/*
Write a function called "isOdd".
Given a number, "isOdd" returns whether the given number is odd.
var output = isOdd(9);
console.log(output); // --> true
*/

function isOdd(num) {
  if (num === 0) return false;
  return num % 3 === 0 ? false : true;  
}
