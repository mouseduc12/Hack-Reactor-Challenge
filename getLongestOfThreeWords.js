/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  let count = 0;
  let currentWord = ""
  let newArr = [word1, word2, word3]
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].length > count){
      count = newArr[i].length;
      currentWord = newArr[i]
    } 
  }
  return currentWord;
}
