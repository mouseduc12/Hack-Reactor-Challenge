/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

function addProperty(obj, key) {
   return obj[key] = true;
}
const obj = {}
console.log(addProperty(obj, "value"))
console.log(obj)
