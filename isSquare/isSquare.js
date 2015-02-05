// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.

var isSquare = function(n){
  // Your code here
  if(n === 0){
  	return true;
  } else if (n > 0){
  	for(var i = n; i >0; i--){
  		if(n/i === i){
  			return true;
  		}
  	}
  } else return false;
  return false;
}