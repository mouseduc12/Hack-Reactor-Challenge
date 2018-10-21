Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']


function filterOddLengthWords(words) {
  let output = words.filter(each => each.length % 2 === 1)
  return output;
}
