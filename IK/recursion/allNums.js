




function allNums(num) {
  helper(num, []);
}

function helper(num, arr) {
  if (num === arr.length) {
    console.log("arr", arr);
    return arr;
  } else {
    for (let i = 0; i <= 9; i++) {
      arr.push(i);
      helper(num - 1, arr);
      arr.pop();
    }
  }
}


console.log("res", allNums());