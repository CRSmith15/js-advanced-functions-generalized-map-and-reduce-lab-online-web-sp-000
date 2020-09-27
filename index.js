// Add your functions here

function map(obj, cb) {
  const arr = []
  for (arr key in obj) {
    arr.push(cb(obj[key]))
  }
  return arr
}