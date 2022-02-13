// Given an arr of meeting time intervals, start - end times
// determine if a person could attend all meetings


// sort by meeting times

function meetingRooms(arr) {
  if (!arr || !arr.length) return true;
  arr = arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    // if > the the meeting next time slot
    if (arr[i][1] > arr[i + 1][0]) {
      return false;
    }
  }

  return true;
}






let test1 = [[0,30], [5,10], [15,20]]; // false
let test2 = [[7,10],[2,4]]; // true

console.log('1', meetingRooms(test1));
console.log('2', meetingRooms(test2));