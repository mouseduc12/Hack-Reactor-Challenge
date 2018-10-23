Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'


function findShortestElement(arr) {
  let count = arr[0].length;
  let strOutput = arr[0]
  for(let each of arr){
    if(each.length < count){
      strOutput = each
    } 
  }
  return strOutput;  
}
