// Given a sorted array A (sorted in ascending order),
// having N integers, find if there exists any pair of
// elements (A[i], A[j]) such that their sum is equal to X.

const arr = [10, 20, 35, 50, 75, 80];
const target = 70;

const isPairSum = (arr, target) => {
  let i  = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return true;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

const result = isPairSum(arr, target);
console.log({ result });

// I: sorted Arr
// O: boolean

// [pseudo]
// Naive: iterate nested loop check if arr[i] + arr[j] === target -> O(n^2) solution

// O(n) approach
// count forward and backwards on array, 2 pointers to tell you whether or not it quals to target
// increase from front < target
// decrease from end if > target
