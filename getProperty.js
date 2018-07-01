/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/
let objects = {
  name: "John",
  lastName: "Dog"
}

function getProperty(obj, key) {
  if(obj) {return obj[key]}
  return undefined;
} 

console.log(getProperty(objects, "lastName"));
