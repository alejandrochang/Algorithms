


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}


// Brute Force Algo
const test = [100, 5, 2, 1, 23, 12, 1];
console.log('res', bubbleSort(test)); //[1,1,2,5,12,23,100]

// Time: worst, best, average  - O(n^2)
// Space: O(1)