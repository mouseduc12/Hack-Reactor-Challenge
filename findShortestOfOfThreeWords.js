/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  var newArr = [word1, word2, word3];
  var count = newArr[0];
  var str = newArr[0]
  for(var i = 0; i < newArr.length; i++){
    if(count < newArr[i].length){
      count = newArr[i].length;
      str = newArr[i]
    }
  }
  return str;
}
