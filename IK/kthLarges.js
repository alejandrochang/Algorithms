


function kth_largest(k, initial_stream, append_stream) {
  let initialStream = [...initial_stream];
  let res = [];

  for (let i = 0; i < append_stream.length; i++) {
    console.log({ initialStream });
    initialStream.push(append_stream[i]);
    console.log('2', { initialStream });
    res.push(initialStream);
  }

  console.log({ res });
  return res;
}


// have initial_stream in the array - iterate -
// push each item into intiial_stream;
// push intial_stream into result;


// "k": 2,
// "initial_stream": [4, 6],
// "append_stream": [5, 2, 20]

console.log('plop', kth_largest(2, [4, 6],[5,2,20]));
// [5, 5, 6]

// Append	           Stream	      Sorted Stream	     2nd largest
// 5	            [4, 6, 5]          [4, 5, 6]	            5
// 2	            [4, 6, 5, 2]	     [2, 4, 5, 6]	          5
// 20	            [4, 6, 5, 2, 20]	 [2, 4, 5, 6, 20]	      6