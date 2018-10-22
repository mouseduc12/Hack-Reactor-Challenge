Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5


function getLengthOfLongestElement(arr) {
  if(arr.length === 0) return 0;
  let count = 0;
  for(let each of arr){
    if(each.length > count){
      count = each.length
    }
  } 
  return count
