// You are given a list of N numbers, in which each number is
// located at most k places away from its sorted position.
// For example, if k = 1, a given element at index 4 might end up
// at indices 3, 4, or 5.

// Come up with an algorithm that sorts this list in O(N log k) time.

function sortByK(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[start + 1] > arr[start]) {
    start += 1;
  } else if (arr[end - 1] < arr[end]) {
    end -= 1;
  }
  
  // else {

  // }
}


const result = sortByK([1,2,4,3,5], 1);
console.log({ result });



// 