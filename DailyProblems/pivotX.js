// Given a pivot x, and a list lst, partition the list into three parts.

// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].


function pivotX(list, x) {
  const buckets = [[],[],[]];

  for (let num of list) {
    if (num === x) {
      buckets[1].push(num);
    } else if (num < x) {
      buckets[0].push(num);
    } else {
      // > x
      buckets[2].push(num);
    }
  }

  return buckets.flat();
}

const x = 10;
const lst = [9, 12, 3, 5, 14, 10, 10];

const res = pivotX(lst, x);
console.log({ res }); // [9, 3, 5, 10, 10, 12, 14].


// 3 buckets approach