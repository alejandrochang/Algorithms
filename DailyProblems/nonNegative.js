// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// You are given an array of nonnegative integers.
// Let's say you start at the beginning of the array and are
// trying to advance to the end. You can advance at most, the number of steps that you're currently on.
// Determine whether you can get to the end of the array.

// For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.
// Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.

function reachEnd(arr) {
  // if reached the end return true;
  if (arr.length <= 1) {
    return true;
  }

  // max index that can be reached
  let max = arr[0]; // 1
  for (let i = 0; i < arr.length; i++) {
    // if no way to jump to next return false
    if (max <= i && arr[i] === 0) {
      return false
    }

    // update max jump
    if (i + arr[i] > max) {
      max = i + arr[i];
    }

    console.log({ max, i }, arr[i]);
    // max enough to reach end
    if (max >= arr.length -1) {
      return true;
    }
  }

  return false;
}

const result = reachEnd([1, 3, 1, 2, 0, 1]);
console.log({ result });


// { max: 1, i: 0 } 1
// { max: 4, i: 1 } 3
// { max: 4, i: 2 } 1
// { max: 5, i: 3 } 2
// { result: true }

// High Level

// [1,3,1,2,0,1] - length: 5
// i: 0, moves: 1
// i: 1, moves: 3   - i + moves = 4   + currPos != length
// i: 1, moves: 2   - i + moves 3     + currPos === length


// i: indices, moves: position value, currPosition: nextArrIndices