// N is an even number of people .
// People should be working on a task in pairs (imagine a Hack Reactor cohort).
// How many possible ways is there to divide this group of people into pairs?

// Example:
// if there are four people (A, B, C, D), there are three possible pairing combinations:
// 1) A-B and C-D
// 2) A-C and B-D
// 3) A-D and B-C

// Write a function that takes N as an input and
// returns the number of possible pairing combinations.

// You can assume that N is always a positive even integer.

var pairing = function (N) {
  //Your code here
  var result = 1;
  while (N > 2) {
    result = result * (N-1);
    N = N -2;
  }
  return result;
} 
