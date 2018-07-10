// Logic Challenge - X dan O
function xo (str){
  if ((str.match(/x/g) || []).length == (str.match(/o/g) || []).length){
    return 'True'
  }
  else {
    return 'False'
  }

}
// TEST CASE
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
