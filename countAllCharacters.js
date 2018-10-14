function countAllCharacters(str) {
  let splitStr = str.split('');
  let newObj = {}
  for(let each of splitStr){
    newObj[each] = (newObj[each] || 0) + 1
  }
  return newObj;
}

var output = countAllCharacters('banana');
console.log(output);
