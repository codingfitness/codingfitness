// You are given un unsorted array of integers and a target integer.
// Write a function that returns a pair of numbers from the array
// that is as close to the target number as possible but does not exceed it.
// The return value should be an array of length 2.
// Example:
// array [10, -2, -7, 8, 5], target 7 => returns [-2, 8].
// The order of numbers in the resulting array does not matter.
// If there are two pairs of integers with the same sum, any pair can be returned.
// If the length of the original unsorted array is less than 2, return null.

var targetSum = function(array, n){
	var best = null;
	var resultArr = null;
  var recurse = function(index){
  	if(index >= array.length){
  		return;
  	}
  	for(var i = index + 1; i < array.length; i ++){
  		var biSum = array[index]+array[i];
  		if(n - biSum >= 0 && best === null){
  			best = n - biSum;
  			resultArr = [array[index],array[i]];
  		} else if (n-biSum >=0 && best!==null && n-biSum <best){
  			best = n-biSum;
  			resultArr = [array[index],array[i]];
  		}
  	}
  	recurse(index+1);
  }
  // Your code here
  if(array.length < 2){
  	return best;
  } else {
  	recurse(0)
  }
  return resultArr;
}
