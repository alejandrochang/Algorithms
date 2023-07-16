// Given an array of numbers, find the length of the longest increasing subsequence in the array. 
// The subsequence does not necessarily have to be contiguous.

// For example, given the array 
// [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 
// the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

function longestIncreasingSubsequence(arr) {
  return arr.reduce((seq, num) => {
    if (num > seq[seq.length - 1]) {
      seq.push(num);
    } else {
      // if not greater than next num - we swap for smallest
      const idx = seq.findIndex(val => val >= num);
      seq[idx] = num;
    }

    console.log({ seq });
    return seq;
  }, [arr[0]]).length;
}

const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
const result = longestIncreasingSubsequence(arr);

// return length; not the sum
// console.log({ result }); // 6 - 0, 2, 6, 9, 11, 15.


function longestIncreasingSubsequenceSum(arr) {
  return arr.reduce((seq, num) => {
    if (num > seq[seq.length - 1]) {
      seq.push(num);
    } else {
      // we need to substitute last smallest
      const idx = seq.findIndex(val => val >= num);
      seq[idx] = num;
    }

    return seq;
  }, [arr[0]]);
}

const res2 = longestIncreasingSubsequenceSum(arr);
// console.log({ res2 }); // 43

