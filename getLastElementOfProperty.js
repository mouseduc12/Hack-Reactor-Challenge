function getLastElementOfProperty(obj, key) {
  if(!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
    return undefined;
  }
  return obj[key][obj[key].length - 1]
}
