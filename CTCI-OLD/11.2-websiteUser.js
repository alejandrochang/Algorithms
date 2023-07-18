// You are given a list of (website, user) pairs that represent users visiting websites.
//  Come up with a program that identifies the top k pairs of websites with the greatest similarity.

// For example, suppose k = 1, and the list of tuples is:

// [('a', 1), ('a', 3), ('a', 5),
//  ('b', 2), ('b', 6),
//  ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5)
//  ('d', 4), ('d', 5), ('d', 6), ('d', 7),
//  ('e', 1), ('e', 3), ('e': 5), ('e', 6)]
// Then a reasonable similarity metric would most likely conclude that a and e are the most similar,
// so your program should return [('a', 'e')].


const tuples = [['a', 1], ['a', 3], ['a', 5],
 ['b', 2], ['b', 6],
 ['c', 1], ['c', 2], ['c', 3], ['c', 4], ['c', 5],
 ['d', 4], ['d', 5], ['d', 6], ['d', 7],
 ['e', 1], ['e', 3], ['e', 5], ['e', 6]];

 // { count '1': 'chars' -}   - { '1': ['a', 'c', 'e']}


//  Keep track of similarities + differences

function topSimilarities(list) {
  let charMap = {};
  for (let i=0; i < list.length; i++) {
    const [ch, count] = list[i];
    if (charMap[ch]) {
      charMap[ch].list.push(count)
    } else {
      charMap[ch] = { list: [count]};
    }
  }

  const resultDiff = [];

  // for (let key in charMap) { // key: a
  //   const users = charMap[key]; // 1,3,5]


  // }

  console.log(charMap);

}



/*


'b': { a: { sim: [], diff: [2, 6] }, c: { sim: 3, diff: 2 }


 1. Iterate and construct arr based off of chars - [{ ch: a, list: [1,3,5]}, { ch: b, list: [2,6]}]
 2. Iterate off of char, pull list - if list.includes(curr[1]) -> res [sim, diff] -> const diff = sim - diff > next override (save keys)

{ '1': { similarities: ['a', 'b', 'c'], differences: []}}

{
 'a': { b: [0, 3], c: [3, 2], e: [3, 1]
 'b': { a: [0, 2], c: [0, 5], d: [1, 3]
 }
*/


const result = topSimilarities(tuples);
console.log({ result });