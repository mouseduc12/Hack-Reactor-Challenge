/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.
*/


var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60


function computeProductOfAllElements(arr) {
  if(arr.length === 0 ) return 0
  let output = arr.reduce((acc, currentValue) => acc * currentValue);
  return output;
}
