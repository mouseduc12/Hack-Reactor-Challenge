function getOddLengthWordsAtProperty(obj, key) {
  if(!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return [];  
  }
  let keyArr = obj[key];
  let output = keyArr.filter(each => each.length % 2 === 1)
  return output;
}
