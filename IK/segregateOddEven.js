

const numbers = [1, 2, 3, 4];

function seggregateOddEven(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[right] % 2 === 0) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;

      left++;
    } else {
      right--;
    }
  }

  return arr;
}


console.log("res", seggregateOddEven(numbers)); // [4,2,1,2]