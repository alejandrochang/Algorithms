
// let result = [];

// function subsetsOfString(str, curr = "", index = 0) {
//   if (index == str.length) {
//     result.push(curr);
//     return result;
//   }
//   subsetsOfString(str, curr, index + 1);
//   subsetsOfString(str, curr + str[index], index + 1);
// }


var uniqueLetterString = function (s) {
  let result = [];
  function subsetsOfString(str, curr = "", index = 0) {
    if (index === str.length) {
      result.push(curr);
      return result;
    }
    subsetsOfString(str, curr, index + 1);
    subsetsOfString(str, curr + str[index], index + 1);
  }

  subsetsOfString(s);

  const unique = [...new Set(result)];
  let count = 0;
  for (let item of unique) {
    const length = [...new Set(item)].length;
    count += length;
  }
  console.log({unique})

  return count;
}

// var uniqueLetterString = function (s) {
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length + 1; j++) {
//       res.push(s.slice(i, j));
//     }
//   }

//   let count = 0;
//   let filteredChars = res.filter((el) => el.length);
  // for (let item of filteredChars) {
  //   const length = [...new Set(item)].length;
  //   count += length;
  // }

//   return filteredChars;
// };

console.log("result", uniqueLetterString("good"));


// const unique = [...new Set(result)];
// console.log("result", subsetsOfString("unique"), { unique });
