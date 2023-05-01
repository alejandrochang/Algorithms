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
  const mostSimilar = [];


}



// { 'a' [1,3,5] - 'e' [1,3,5,6] 'c' [1,2,3,4,5] } 
// { '1': { similarities: ['a', 'b', 'c'], differences: []}}


const result = topSimilarities(tuples);
console.log({ result });