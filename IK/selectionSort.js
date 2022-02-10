
// i + 1
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // index for swapping
    for (let j = i + 1; i < arr.length ; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Brute Force Algo
// Time: 

// Brute Force Algo
const test = [100, 5, 2, 1, 23, 12, 1];
console.log('res', selectionSort(test)); //[1,1,2,5,12,23,100]