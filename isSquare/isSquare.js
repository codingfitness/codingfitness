// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.


var isSquare = function(n){
  // Your code here
  var i = 0;
  while (i * i <=n) {
    if (i * i === n) {
      return true;
    }
    i++;
  }
  return false;
}