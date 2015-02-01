// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.

var isSquare = function(n){
  // Your code here
  if(n === 1 || n === 0) {
    return true;
  }

  for(var i = 0; i <= n / 2; i ++) {
    if(i * i === n) {
      return true;
    }
  }
  return false;
}