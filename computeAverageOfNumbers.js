Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
 If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3


function computeAverageOfNumbers(nums) {
  if(nums.length === 0) {
    return 0
  }
  let total = 0; 
  for(let each of nums){
    total += each
  }
  return total / nums.length;
}
