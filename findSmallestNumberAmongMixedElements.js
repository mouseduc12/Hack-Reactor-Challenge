Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([1,4, 'lincoln',  'octopus']);
console.log(output); // --> 4

function getShortest(arr) {
  return arr.reduce(function(acc, value) {
    if (typeof value == 'string') {
      if (acc === null || value.length < acc.length) {
        acc = value;
      }
    }
    return acc;
  }, null) || '';
}
