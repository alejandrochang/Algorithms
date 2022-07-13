/*
 * Complete the 'calculateAmount' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function calculateAmount(prices) {
  let lowest = Infinity;
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest && i == 0) {
      lowest = prices[i]; // 2
      total += prices[i];
    }

    let diff = prices[i] - lowest; // 5 - 2

    if (diff > 0) {
      total += diff;
    }
    
    const min = Math.min(lowest, prices[i]); // 2
    if (min >= 0) {
      lowest = Math.min(lowest, prices[i])
    }
  }

  return total;
}

// console.log("res", calculateAmount([2,5,1,4]));

// Check previous -> get diff -> getMin

function maxEvents(arrivals, duration) {
  let events = [];

  for (let i = 0; i < arrivals.length; i++) {
    events.push([arrivals[i], duration[i]]);
  }

  const allEvents = events.sort((a, b) => a[0] - b[0]);
  console.log({ allEvents });
  let posEvents = 0;
  let currentEndTime = allEvents[0][1]; // 2

  for (let i = 0; i < events.length - 1; i++) {
    if (currentEndTime <= events[i + 1][0]) {
      currentEndTime = events[i + 1][1];
      posEvents += 1;
    }
  }

  return posEvents + 1;
}

// console.log("res", maxEvents([1, 3, 3, 5, 7], [2, 2, 1, 2, 1]));
console.log("res", maxEvents([1, 1, 1, 1, 4], [10, 3, 6, 4, 2]));
// console.log("res", maxEvents([1, 3, 5], [2, 2, 2]));

// currSum = 1 + 2

// currSum <= arr[i + 1]
//   promotionalEvents += 1
// 1 1 1 1 4 5
// 10 3 6 4 2 5


// push [[1, 2], [3, 2], [3,1], [5, 2]. [7, 1]]

// const test = [[1, 2], [3, 2], [3,1], [5, 2], [7, 1]];

// let sorted = test.sort((a, b) => (a[0] - b[0]));
// console.log({ sorted });

