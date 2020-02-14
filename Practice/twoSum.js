





const twoSum = (numbers, target) => {
  let map = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let difference = target - num;
    if (typeof map[num] === 'number') {
      return [map[num] + 1, i + 1]
    }

    map[difference] = i
  }

  return map;
}


console.log(twoSum([2,7,11,15], 9)); // [1, 2]