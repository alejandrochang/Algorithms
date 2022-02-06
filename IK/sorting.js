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
// console.log('res', bubbleSort(arr));

// Time Complexity: O(n^2)
// Space: constant O(1)


// 2. Selection Sort - (n+1); compare to next iteration

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr;
}


// console.log("selectionSort:", selectionSort(arr));
// Uses n-1 or n+1
// Time: O(n^2)
// Notes: Use minIndex to keep track of swap


// 3. Insertion Sort
// Recursive

function insertionSort(arr, n) {
  if (n <= 1) return; // don't keep going
  insertionSort(arr, n - 1);

  j = n - 1;
  while (j >= 1 && arr[j] > arr[j + 1]) {
    swap(arr, arr[j + 1], arr[j]);
    j = j - 1;
  }

  return arr;
}



// [3, 2, 1]
// console.log("insertionSort:", insertionSort(arr, arr.length - 1));


// Iterative

