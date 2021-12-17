// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.



const mergeInt = (intervals) => {
  if (intervals.length < 2) return intervals;

  // smallest to greatest
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  // check if current arr is < previousArr
  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]; // [2,6]
    if (previous[1] >= curr[0]) {
      // if greater reassign previous
      previous = [previous[0], Math.max(previous[1], curr[1])];
    } else {
      result.push(previous);
      previous = curr;
    }
  }

  result.push(previous);

  return result;
};

// Time: O(nlogn)
// Space: O(n) result arr space

const ex1 = [[1,3],[2,6],[8,10],[15,18]]; // [[1,6],[8,10],[15,18]]
// const ex2 = [[1,4],[4,5]]; // [[1,5]]


console.log('result', mergeInt(ex1));
// console.log('result2', mergeInt(ex2));



// Solution: Check if the currentInterval begins after the previos interval ends