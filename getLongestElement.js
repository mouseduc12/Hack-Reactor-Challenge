Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'


function getLongestElement(arr) {
  let count = arr[0].length;
  let output = '';
  for(let each of arr){
    if(count < each.length){
      output = each;
    } else {
      output = each
    }
  }
  return output;
}
