

function quickSort(arr){
  if (arr.length < 2) return arr;
  let left = [];
  let right = [];

  let pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) { 
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  } 
  // let left = arr.filter(x => x < pivot);
  // let right = arr.filter(x => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// const arr = [38, 27, 43, 3, 9, 82, 10]; // [ 3, 9, 10, 27, 38, 43, 82 ]
// console.log(quickSort(arr));

// function quickSort(array) {
//     if (array.length < 2) return array;

//     const pivot = array[0];

//     let left = array.filter(e => e < pivot); 
//     let right = array.filter(e => e > pivot);

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

console.log(quickSort([7, 5, 5, 9,4,8,2]));