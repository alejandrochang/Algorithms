
function hasPairWithSum(arr, sum) {
  let map = {};

  for (let int of arr) {
    
    let difference = sum - int; // 2
    if (map[int]) return true;
    map[difference] = true;
  }

  return false;
}

const arr = [6, 4, 3, 2, 1, 20];
console.log(hasPairWithSum(arr, 8)); // true
console.log(hasPairWithSum(arr, -5)); // false
console.log(hasPairWithSum(arr, 26)); // true

// i: arr, integer (two factors)
// o: boolean
// no restrictions
// Time: Space: