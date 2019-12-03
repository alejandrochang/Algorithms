// The marketing team would like to know how many users there are
// in each Coding Score range, so that they can share that information on our website.
// They've asked you to create a report containing that information.

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850.
// For the purpose of this task, levels are defined in the following way:



// Calculate how many users are there in each level, then return a list of strings where each string
// represents a level and a number of users within that level, formatted like LevelName - Number.
// The levels should be sorted in decreasing order of those numbers, omitting any levels that have no users.
// In case of a tie, the higher level should appear first.

// For example, if you had this input...

// [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good - 2',
//   'Elite - 1',
//   'Poor - 1'
// ]

let greatest = {
  'Elite': 5,
  'Excellent': 4,
  'Good': 3,
  'Fair': 2,
  'Poor': 1,
}

const bestScore = (a, b) => {
  if (greatest[a[0]] < greatest[b[0]]) {
    return a[1];
  } else {
    return b[1];
  }
}

const calculateScores = (arr) => {
  let scoreMap = {};

  for (let int of arr) {
    if (int <= 599) {
      scoreMap['Poor'] = scoreMap['Poor'] + 1 || 1;
    } else if (int <= 699) {
      scoreMap['Fair'] = scoreMap['Fair'] + 1 || 1;
    } else if (int <= 749) {
      scoreMap['Good'] = scoreMap['Good'] + 1 || 1;
    } else if (int <= 799) {
      scoreMap['Excellent'] = scoreMap['Excellent'] + 1 || 1;
    } else if (int >= 800) {
      scoreMap['Elite'] = scoreMap['Elite'] + 1 || 1;
    }
  }

  let formatedArr = Object.entries(scoreMap).sort((a, b) => {
    if (a[1] === b[1]) {
      return bestScore(a, b);
    }
    return a[1] < b[1];
  });


  let result = formatedArr.map((arr) => {
    return `${arr[0]} - ${arr[1]}`
  });

  return result;
}


console.log(calculateScores([330, 723, 730, 825])); //
// [
//   'Good - 2',
//   'Elite - 1',
//   'Poor - 1'
// ]

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+

// iterate through integers
// add all elements to a countmap with specific condition
// sort them by score first, and then by rank