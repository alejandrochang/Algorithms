// Implement an autocomplete system. That is, 
// given a query string s and a set of all possible query strings, 
// return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.


// function autocompleteSysSlow(str, strings) {
//   // Inefficient Solution
//   let res = [];
//   for (let s of strings) {
//     if (s.includes(str)) {
//       res.push(s);
//     }
//   }

//   return res;
// }

// Time: O(n^2), Space: O(n);

function autocompleteSys(str, strings) {
  const regex = /de.*/g;
  const test = strings.join("-").match(regex);
  return test[0].split('-');
}

const strings = ['dog', 'deer', 'deal'];
const s = 'de';

const res = autocompleteSys(s, strings);
console.log({ res }); // return [deer, deal].

// Time: O(n) time complexity


// d[0] e[1]
// dog-deer-deal

