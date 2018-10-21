function getNthElementOfProperty(obj, key, n) {
  if(!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
    return undefined;
  }
  return obj[key][n]
}


