
// i + 1
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     // index for swapping
//     for (let j = i + 1; i < arr.length ; j++) {
//       if (arr[j] < arr[i]) {
//         minIndex = j
//       }
//     }

//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }

//   return arr;
// }


// Scann for smallest index and replace
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    } 

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}


// Brute Force Algo
// Time: O(N^2) best, avg and worse

// Brute Force Algo
const test = [100, 5, 2, 1, 23, 12, 1]; 
console.log('res', selectionSort(test)); //[1,1,2,5,12,23,100]
// res[(1, 1, 2, 5, 12, 23, 100)];