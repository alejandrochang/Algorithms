

const reverseString = (str) => {
  if (str === '') return '';

  let res = reverseString(str.substr(1)) + str.charAt(0);
  console.log({ res })
  return res;
}


console.log(reverseString('hello'));