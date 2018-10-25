/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4,2]);
console.log(output); // --> 'two'


function findShortestWordAmongMixedElements(arr) {
  if(arr.length === 0) return '';
  let newArr = arr.filter(value => {
    if(typeof value !== "string"){
      return "";
    }
    return typeof value === "string";
  });
  let smallest = newArr[0]
  let smallestNum = newArr[0].length
  for(let i = 0; i < newArr.length; i++){
    if(smallestNum > newArr[i].length){
      smallest = newArr[i];
    }
  }
  return smallest
}
