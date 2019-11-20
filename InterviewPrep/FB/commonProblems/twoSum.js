// TwoSum: [1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);

const twoSum = (arr, target) => {
  let map = {};
  let result = [];

  for (let int of arr) {
    if (map[int]) {
      let initial = target - int;
      result.push([int, initial]);
    }

    let difference = target - int;
    map[difference] = true;
  }

  return result;
}


console.log(twoSum([1, 2, 2, 3, 4], 4)); // [[2, 2], [3, 1]]

// [psuedo]
// iterate through arr, get the difference from target - int
// store that difference, if we find the difference to be true
// add the element + target - currEl

// Time: O(n)
// Space: O(n)