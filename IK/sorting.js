// Sorting Algorithms

// Brute Force Algorthms:
// 1. Bubble Sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}

const arr = [5, 2, 4, 3, 1, 10];
console.log('res', bubbleSort(arr));


// 2. 