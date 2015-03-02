/*The function binarySum should add two n-bit binary integers and return their sum.
The input integers are given in the form of n-element arrays.
The sum of the two integers should be stored in binary form in
􏰐an (n+1)-element array.

Example:

binarySum ([1, 1], [1, 1]); // returns [1, 1, 0]
binarySum ([1, 0], [0, 1]); // returns [0, 1, 1]
*/

var binarySum = function (a, b) {
  a = a.slice().reverse();
  b = b.slice().reverse();
  var numOne = 0;
  var numTwo = 0;
  a.forEach(function(el, ind){
    var power = Math.pow(2, ind);
    numOne += el * power;
    numTwo += b[ind] * power;
  })
  var binaryArray = (numOne + numTwo).toString(2).split('').map(function(el){return parseInt(el)});
  while(binaryArray.length < a.length){
    binaryArray.unshift(0)
  }
  return binaryArray;
}
