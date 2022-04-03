




const badges = [1,-1,-1,-1,1,1];


function subLength(badges) {
  let maxSubarrayLength = 0;
  const slices = [];

  for (let i = 0; i < badges.length; i++) {
    for (let j = 0; j < badges.length + 1; j++) {
      const slice = badges.slice(i, j);
      slices.push(slice);
      // const product = slice.reduce((acc, curr) => acc *= curr, 1);
      // if (slice.length > maxSubarrayLength && product === 1) {
      //   maxSubarrayLength = slice.length;
      // }
      // console.log({ slice, product, i, j })
    }
  }

  for (let slice of slices) {
    const product = slice.reduce((acc, curr) => (acc *= curr), 1);
    if (slice.length > maxSubarrayLength && product === 1) {
      maxSubarrayLength = slice.length;
    }
  }

  return maxSubarrayLength;
}



console.log('res', subLength(badges));