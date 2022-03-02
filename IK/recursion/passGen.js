

// Input: [1,2,3,4];
// Output:
// "3214"

// **/


// //      '1234'
// //  '1324' '1342'

const Check = (str) => str === '3214';
const visited = {};
let result = null;

function correctPass(arr, length) {
  if (!arr) return 'huh'
  let str = arr.join('');
  if (Check(str) && arr.length === length) {
    result = str;
    return;
  }
  
  for (let num of arr) {
    if (result) return result;
    let remainder = arr.filter((curr) => curr !== num);
    let nextPass = [...remainder, num];

    if (visited[nextPass]) {
      continue;
    } else {
      visited[nextPass] = true;
    }

    correctPass(nextPass, length); //  1234 , 1324, 1423, 
  }

  return { result };
}

console.log('res', correctPass([1,2,3,4], 4));