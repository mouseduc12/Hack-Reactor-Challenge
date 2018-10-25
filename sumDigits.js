
var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function. */
 
/*
function sumDigits(num){
  let splitArr = num.toString().split('');
  let total = 0;
  let startingPoint = 0; 
  if(splitArr[0] === "-"){
    total -= parseInt(splitArr[1]);
    startingPoint = startingPoint + 2; 
  }
  for(let i = startingPoint; i < splitArr.length; i++){
    total += parseInt(splitArr[i]);
  }
  return total;
}
var output = sumDigits(-4041);
console.log(output);*/
