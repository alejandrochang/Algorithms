// Unique solved O(1) space and O(n) time


const unique = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[ Math.abs(arr[i])] >= 0) {
      // arr[ Math.abs(arr[i])] = -arr[ Math.abs(arr[i])]; 
    } else {
      console.log(arr[i] + " ");
    }
  }

  return arr;
}

let array = [1, 2, 3, 4, 5, 6, 3]
console.log(unique(array));