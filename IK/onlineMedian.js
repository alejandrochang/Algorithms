







function handleStream(arr) {
  if (arr.length === 1) return arr[0];
  arr = arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    let sum = Math.floor((arr[mid] + arr[mid - 1]) / 2);
    return sum;
  }

  return arr[mid];
}

function online_median(stream) {
  if (!stream.length) return [];
  if (stream.length === 1) return stream;
  let res = [];

  for (let i = 0; i < stream.length; i++) {
    const median = handleStream(stream.slice(0, i + 1));
    res.push(median);
  }

  // Write your code here.
  return res;
}


let test = [3, 8, 5, 2];
console.log('res', online_median(test)); // [3, 5, 5, 4]
