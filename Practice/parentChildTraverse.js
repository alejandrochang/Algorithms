



const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
  [15, 21], [4, 8], [4, 9], [9, 11], [14,4],[13,12],
  [12,9], [15,13],
]

const checkAncestors = (arr1, arr2) => {
  return arr1.some((val) => arr2.includes(val));
}

function hasCommonAncestor(pairs, child1, child2) {
  const ancestors1 = [];
  const ancestors2 = [];

  const bfs = (child, arr) => {
    const q = [child]; // 6
    while (q.length > 0) {
      let curr = q.shift(); // 6

      for (let [par, chil] of pairs) {
        if (curr === chil) {
          // push ancestors + push to queue
          arr.push(par);
          q.push(par);
        }
      }
    }
  }

  bfs(child1, ancestors1);
  bfs(child2, ancestors2);


  return (
    checkAncestors(ancestors1, ancestors2) ||
    checkAncestors(ancestors2, ancestors1)
  );
}


console.log(hasCommonAncestor(parentChildPairs, 6, 8)); // true: 4
console.log(hasCommonAncestor(parentChildPairs, 5, 8)); // true: 4
console.log(hasCommonAncestor(parentChildPairs, 11, 6)); // true: 4
console.log(hasCommonAncestor(parentChildPairs, 3, 1)); // false: 
console.log(hasCommonAncestor(parentChildPairs, 12, 4)); // false: 


// first get all parents of 6
// first get all parents of 8
// if ancestors match we have matching ancestors