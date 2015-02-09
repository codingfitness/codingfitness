 /*This is a problem from Google Code Jam Qualification round.

 Scientists are trying to decipher a word in an alien language.

 It is known that the language contains exactly D words. 
 Those D words are known to scientists and included in a dictionary.
 Every word consists of exactly L lowercase letters.

 Unfortunately, the signal from the other planet was weak and some of the letters
 in the words cannot be interpreted unambigously. Instead of specific words,
 scientists are dealing with the patterns in the following form:

 A pattern consists of exactly L tokens. Each token is either a single
 lowercase letter or a group of unique lowercase letters surrounded by
 parenthesis ( and ). For example: (ab)d(dc) means the first letter is
 either a or b, the second letter is definitely d and the last letter is
 either d or c. Therefore, the pattern (ab)d(dc) can stand for either
 one of these 4 possibilities: add, adc, bdd, bdc.

 Write a program that takes three inputs:
 1) A string representing a pattern (e.g. "(ab)d(dc)");
 2) A dictionary of alien words (an array of words).
 3) The number of letters in the alien language (L).

 The output is the number of words from the dictionary that match the given pattern.

 Example:

 Number of letters L = 3;
 Dictionary = ["abc", "bca", "dac", "dbc", "cba"];

 "(ab)(bc)(ca)" => 2
 "abc" => 1
 "(abc)(abc)(abc)" => 3
 "(zyx)bc" => 0
 
 */

var checkPattern = function(pattern, dictionary, L) {
  if (pattern.indexOf("(") === -1 && pattern.length === L) {
    for (var i = 0; i < dictionary.length; i++) {
      if (pattern === dictionary[i]) {
      	return true;
      }
    }
  }
  return false;
}

var checkStart = function(start, dictionary) {
  var len = start.length;
  for (var i = 0; i < dictionary.length; i++) {
    if (start === dictionary[i].slice(0, len)) {
      return true;
    }
  }
  return false;
}

var getEnd = function (pattern, startPosition) {
  for (var i=startPosition; i < pattern.length; i++) {
    if (pattern.charAt(i) === ")") {
      return [pattern.slice(i+1), i];
    }
  }
}

var getFirstParen = function (pattern) {
  for (var i = 0; i < pattern.length; i++) {
  	if (pattern.charAt(i) === "(") {
  	  return i;
  	}
  }
}

var numberWords = function (pattern, dictionary, L) {
  // Your code here.
  var sum = 0;
  var numberWordsHelper = function (pattern, dictionary, L, i) {
    if (checkPattern(pattern, dictionary, L)) {
      sum++;
    } else if (pattern.indexOf("(") === -1 && pattern.length !== L) {
      return;
    } else if (pattern.indexOf("(") === -1 && pattern.length === L && !checkPattern(pattern, dictionary, L)) {
      return;
    } else {
      var startPos = getFirstParen(pattern);
      var remainder = getEnd(pattern, startPos+1)[0];
      var endPos = getEnd(pattern, startPos+1)[1];
      for (var j = startPos+1; j<endPos; j++) {
        var startPattern = pattern.slice(0, startPos) + pattern.charAt(j);
        if (checkStart(startPattern, dictionary)) {
          var newPattern = startPattern+remainder;
          numberWordsHelper(newPattern, dictionary, L, i+1);
        }          
      }
    }
  }
  numberWordsHelper(pattern, dictionary, L, 0);
  return sum;
}

