


function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    let red = i - 1; // 0

    while (red >= 0 && arr[red] > temp) {
      // adjust the next index of red - shift the next node
      arr[red + 1] = arr[red];
      red--;
    }

    arr[red + 1] = temp
  }

  return arr;
}


const res = insertionSort([8, 2, 4, 9, 3, 6]); // [ 2, 3, 4, 6, 8, 9 ]
console.log("result:", res);


// Time: 
// Space; 


/* 
  Notes:
    Right shift operations to move from left to right.
    Have temp, red = i - 1;
*/
