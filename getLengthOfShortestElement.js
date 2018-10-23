Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3


function getLengthOfShortestElement(arr) {
  let count = arr[0].length;
  for(let each of arr){
    if(count > each.length){
      count = each.length;
    }
  }
  return count;
}
