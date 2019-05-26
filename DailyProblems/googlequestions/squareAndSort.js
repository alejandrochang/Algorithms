// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].


const squareAndSort = (array) => {
  const squared = array.map((num) => num * num);
  return squared.sort( (a, b) => {
    return a - b;
  });
};

console.log(squareAndSort([-9, -2, 0, 2, 3])); //[0, 4, 4, 9, 81]