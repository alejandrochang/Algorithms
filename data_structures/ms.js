// MS int

// const a = [1, 2, 2, 1]; // true
// const b = [7, 7, 7]; // false
// const c = [1, 2, 2, 3]; // false


// const pairs = (nums) => {
//   const map = {};

//   for (let num of nums) {
//     map[num] = map[num] + 1 || 1;
//   }
//   const values = Object.values(map);

//   console.log({ values })
//   for (let val of values) {
//     if (val % 2 !== 0) return false;
//   }

//   return true;
// }

// console.log('pairs', pairs(a)); // true
// console.log('pairs', pairs(b)); // false
// console.log('pairs', pairs(c)); // false


// add to map
// if values is even then return true
// else return false



function maxUniqueSplit(S) {
  let right = 0;
  let count = 0;
  const set = new Set();

  while (right < S.length) {
    if (set.has(S.charAt(right))) {
      count += 1;
      set.clear();
    }

    set.add(S.charAt(right));
    right += 1;
  }

  return count + 1;
}


const string = 'abacdec';
const string2 = 'abba';
console.log('res', maxUniqueSplit(string)); // 3






