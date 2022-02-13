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

// console.log('1', meetingRooms(test1));
// console.log('2', meetingRooms(test2));



function meetingRooms2(arr) {
  var starts = arr.slice().sort((a, b) => a[0] - b[0]);
  var ends = arr.sort((a, b) => a[1] - b[1]);

  let rooms = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    starts[i][0] < ends[end][1] ? rooms++ : end++;
  }

  return { rooms, end };
}


let test3 = [[0,30], [5,10], [15,20]]; //
// let test4 = [[7,10],[2,4]]; //

console.log("1", meetingRooms2(test3));
// console.log("2", meetingRooms2(test4));

// starts: [ [ 0, 30 ], [ 5, 10 ], [ 15, 20 ] ],
// ends: [ [ 5, 10 ], [ 15, 20 ], [ 0, 30 ] ]


// i = 0 - 0 < 10 
// room 1