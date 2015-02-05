// You are given a set of unique characters and a string.

// Find the smallest substring of the string containing all the characters in the set.

// ex:
// Set : [a, b, c]
// String : "abbcbcba"

// Result: "cba"




/*var charSetInString = function(chars, str){
  var obj = {};
  var count = chars.slice(0);
  for (var i = 0; i<str.length; i++) {
  	if (!obj[str.charAt(i)]) {
  	  obj[str.charAt(i)] = [i];
  	  count[chars.indexOf(str.charAt(i))] = 1;
  	} else {
  	  obj[str.charAt(i)].push(i);
      count[chars.indexOf(str.charAt(i))]++;
  	}
  }
  var min = str.length+1;
  var minPos = [];
  for (var i = 0; i<count.length; i++) {
    if (count[i] < min) {
      min = count[i];
      minPos=obj[chars[i]];
    } 
  }
  var minSubstr;
  

  for (var i = 0; i<minPos.length; i++) {

  }

  return obj;
};*/

var rowSum = function (row, posStart, posEnd) {
  var sum = 0;
  for (var i = posStart; i<=posEnd; i++) {
  	sum = sum + row[i];
  }
  return sum;
}

var matrixSum = function(matrix, posStart, posEnd) {
  var sumCol = [];
  for (var i = 0; i<matrix.length; i++) {
  	sumCol[i] = rowSum(matrix[i], posStart, posEnd);
  }
  return sumCol;
}

var vectorCheck = function(vector) {
  for (var i=0; i<vector.length; i++) {
    if (vector[i] === 0) {
      return false;
    }
  }
  return true;
}

var charSetInString = function (chars, str) {
  var matrix = [];
  var arr;
  for (var i = 0; i<chars.length; i++) {
  	arr = [];
  	for (var j = 0; j<str.length; j++) {
      arr[j] = 0;
  	}
  	matrix.push(arr);
  }
  var rowInd;
  for (var i=0; i<str.length; i++) {  
    rowInd = chars.indexOf(str.charAt(i));
    matrix[rowInd][i] = 1;
  } //by now it's quadratic time complexity

  //var column = matrixSum(matrix, 0, str.length-1);
  var shortStr=str;
  var subMatr;
  var newStr;
  for (var i = 0; i < str.length - chars.length + 1; i++) {
  	for (var j = i + chars.length -1; j < str.length; j++) {
      subMatr = matrixSum(matrix, i, j);
  	  if (vectorCheck(subMatr)) {
  	  	newStr = str.slice(i, j+1);
  	  	if (newStr.length < shortStr.length) {
  	  	  shortStr = newStr;
  	  	}
  	  }
  	}
  }
      
  return shortStr;
}