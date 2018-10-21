var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]


function keep(array, keeper) {
  let output = array.filter(each => each === keeper);
  return output; 
}
