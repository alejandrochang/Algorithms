
// A: [1, 2, 3]
// B: [2, 3]

// Find all the scores where TeamB is greater than teamA 
 
const allScores = (a, b) => {
  let result = [];
  let counter = 0;
  let i = 0;
  let j = 0;

  while (i < a.length && j !== b.length) {
    const aScore = a[i]; // 1
    const bScore = b[j]; // 2
    if (bScore >= aScore) {
      counter++;
    }

    i++;

    if (aScore === a[a.length - 1]) {
      result.push(counter);
      j++;
      counter = 0;
      i = 0;
    }
  }

  return result;
}

const a = [1, 2, 3];
const b = [2, 3];
console.log(allScores(a, b));
