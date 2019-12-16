

const unique = (array) => {
  let j = 1;
  let r = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[j] || array[r].includes(array[i])) {
      array[i] = [array[i], array[j]];
      j++;
      i++;
    } 
    
    // else {

    // }
  }
}


let arr = [1, 4, 5, 2, 1, 5, 2];
console.log(unique()); //

// [1, 4, 5, 2]
