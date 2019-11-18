  // assert.equal(reverse(1234), 4321);
  // assert.equal(reverse(-1200), -21);

  const integerReversal = (int) => {
    if (int > 0) {
      return parseInt(formatReverseNumber(int));
    } else {
      return Math.sign(int) * parseInt(formatReverseNumber(Math.abs(int)));
    }
  }

  const formatReverseNumber = (num) => {
    return num.toString().split('').reverse().join('')
  }

  console.log(integerReversal(1234)); //4321
  console.log(integerReversal(-1200)); //-21


  // if positive -> stringify, split, reverse, join, parseInt
  // if negative -> Math.sign(), Math.abs,split, reverse, join, parseInt