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

// Solving recursively
var loneSurvivor = function(chairs, skip, i) {

  i = i || 0;
  

  var length = chairs.length;

  if(length === 1) {
    return chairs[0];
  }

  chairs.splice(i,1);
  length -= 1;

  skip ++;
  i += skip;

  i = i > length - 1 ? i % length : i;

  return loneSurvivor(chairs, skip, i)
}



// Using while loop
// var loneSurvivor = function(chairs, skip) {
//   //your code here

//   var i = 0;

//     chairs.splice(i,1);
//     skip ++;
//     i += skip;

//     if(i > chairs.length - 1) {
//       i %= chairs.length;
//     }
//   }

//   return chairs[0];
// };



