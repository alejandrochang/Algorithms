
// unique problem

function unique(arr) {
  return [... new Set(arr)];
}

var items = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4]
console.log(unique(items)); // [ 4, 5, 6, 3, 2, 23, 1 ]
