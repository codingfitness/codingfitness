/** THE PROBLEM *************************************************************
-----------------------------------------------------------------------------
 * Take a second to imagine that you are in a room with 100 chairs arranged in
 * a circle. These chairs are numbered sequentially from One to One Hundred.
 * At some point in time, the person in chair #1 will be told to leave the room.
 * The person in chair #2 will be skipped, and the person in chair #3 will be 
 * told to leave. Next to go is person in chair #6. In other words, 1 person 
 * will be skipped initially, and then 2, 3, 4.. and so on. This pattern of 
 * skipping will keep going around the circle until there is only one person 
 * remaining...the survivor.
 *
 * Note that the chair is removed when the person leaves the room.
 * Write a program to figure out which chair the survivor is sitting in.
 * 
 * EXTRA CREDIT: solve recursively 
 ****************************************************************************/

var checkArrayFalse = function(array) {
  var sum = 0;
  var value;
  for (var i = 0; i<array.length; i++) {
  	if (array[i] === false) {
  	  sum++;
  	} else {
  	  value = array[i];
  	}
  }
  if (sum === array.length - 1) {
  	return value;
  }
  return false;
}

var loneSurvivor = function(chairs, skip) {
    //your code here
  var loneSurvivorHelper = function(chairs, skip, start) {
    if (checkArrayFalse(chairs)) {
  	  return checkArrayFalse(chairs);
    }
    var sumJump = 0;
    while (sumJump < skip) {
      start = (start + 1) % chairs.length;
      if (chairs [start]) {
      	sumJump++;
      }
    }
    chairs[start] = false;
    start = (start + 1) % chairs.length;
    while (!chairs[start]) {
      start = (start + 1) % chairs.length;
    }
  	return loneSurvivorHelper(chairs, skip+1, start);
  }
  
  return loneSurvivorHelper(chairs, skip, 0);
};
