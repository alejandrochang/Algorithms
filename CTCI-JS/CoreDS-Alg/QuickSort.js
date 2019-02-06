



function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  let left = quickSort(arr.slice(1).filter(el => el <= pivot));
  let right = quickSort(arr.slice(1).filter(el => el > pivot));

  return [...left, pivot, ...right];
}

console.log(quickSort([11, 4, 2223, 52, 5, 22, 1, 3, 77])); //[ 1, 3, 4, 5, 11, 22, 52, 77, 2223 ]
