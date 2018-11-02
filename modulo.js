function modulo(num1, num2) {
  let divider = Math.floor(num1 / num2);
  console.log(Math.abs(divider))
  let output = num1 - divider * num2;
  return output;
}
