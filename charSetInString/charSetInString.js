// You are given a set of unique characters and a string.

// Find the smallest substring of the string containing all the characters in the set.

// ex:
// Set : [a, b, c]
// String : "abbcbcba"

// Result: "cba"

// The target time complexity is linear!

var objCheck = function(obj) {
  for (var key in obj) {
  	if (obj[key]===0) {
  	  return false;
  	}
  }
  return true;
}

var charSetInString = function(chars, str){
  var obj = {};
  var shortstr;
  var newstr;
  var start = 0;
  var end = chars.length - 1;
  var checker = 1;
  for (var i = 0; i < chars.length; i++) {
  	obj[chars[i]]=0 
  }
  for (i=start; i<=end; i++) {
  	obj[str.charAt(i)]++;
  }
 
  while (end < str.length) {
  	console.log(obj);
    if (objCheck(obj)) {
      console.log("obj", obj, start, end);
      newstr = str.slice(start, end + 1);
      if (shortstr === undefined) {
      	shortstr = newstr;
      } else if (newstr.length < shortstr.length) {
      	shortstr = newstr;
      }
      obj[str.charAt(start)]--;
      start++;
      
      if (end - start + 1 < chars.length) {
      	end++;
      	obj[str.charAt(end)]++;
      }
    } else {
      end++;
      obj[str.charAt(end)]++;
    }

  }
  return shortstr;
};
