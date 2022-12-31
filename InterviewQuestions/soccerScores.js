
// A: [1, 2, 3]
// B: [2, 3]

// Find all the scores where TeamB is greater than teamA 


// Insert arr into map
// Iterate through other arr - check if insertion item is available
// if so increase counter

// function allScores(a, b){

// }
 
const allScores = (a, b) => {
  let result = [];
  let counter = 0;
  let i = 0; // 0
  let j = 0; // 1

  while (i < a.length && j !== b.length) {
    const aScore = a[i]; // 1
    const bScore = b[j]; // 2
    if (bScore >= aScore) {
      counter++;
    }

    i++;

    if (aScore === a[a.length - 1]) {
      result.push(counter);
      counter = 0;
      i = 0;
      j++;
    }
  }

  return result;
}

const a = [1, 2, 3];
const b = [2, 3];
console.log(allScores(a, b));
