


// "k": 2,
// "initial_stream": [4, 6],
// "append_stream": [5, 2, 20]


function kthLargestStream(k, initialStream, appendStream) {
  let result = [];
  const q = appendStream;
  while (q.length > 0) {
    const curr = q.shift(); // 5
    initialStream = [...initialStream, curr].sort((a, b) => a - b);
    console.log({ initialStream })
    result.push(initialStream[k]);
  }

  return result.reverse();
}

// let result = kthLargestStream(2, [4,6],[5,2,20]);
let result = kthLargestStream(2, [1,1],[2,3,4,5]);
// [5, 5, 6]
console.log({ result });