// Dynamic Programming Exercises 

let solutions = {};

function add(x, y) {
  if (solutions[[x, y]]) {
    return solutions[[x, y]];
  }

  solutions[[x, y]] = x + y;
  return x + y;
}

console.log(add(2, 3)); // 5
console.log(add(5, 6)); // 11
console.log(add(10, 12)); // 22

console.log(solutions);  // { '2,3': 5, '5,6': 11, '10,12': 22 }


let tableData = {};

function fibonacci(n) {
  if (tableData[n]) {
    return tableData[n];
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  tableData[n] = fibonacci(n-1) + fibonacci(n-2);
  return tableData[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]