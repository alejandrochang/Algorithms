


const str = '1abcxyz999'
const substrings = ['abc', '123', '1','2','n', '999'];


// Result <b>1</b>

const embolden = (s) => `<b>${s}</b>`;

function emboldenString(s, substrings) {
  const bucketIndexes = Array(s.length).fill('F');
  for (let i = 0; i < substrings.length; i++) {
    const sub = substrings[i];
    const startIndex = s.indexOf(sub);
    const endIndex = startIndex + sub.length;
    if (startIndex === -1) continue;

    for (let j = startIndex; j < endIndex; j++) {
      bucketIndexes[j] = 'T';
    }
  }

  let resultStr = '';
  let tempStr = '';
  for (let i = 0; i < bucketIndexes.length; i++) {
    const bucket = bucketIndexes[i];
    if (bucket === 'T') {
      tempStr += s[i];
    } else {
      // bucket if 'F'
      if (tempStr.length) {
        resultStr += embolden(tempStr);
        tempStr = '';
      }

      resultStr += s[i];
    }
  }

  if (tempStr.length) resultStr += embolden(tempStr);

  return resultStr;
}

const result = emboldenString(str, substrings);
console.log({ result }); // '<b>1abc</b>xyz<b>999</b>'


// Find the index of the strings where we want to ensure the buckets can't be changed
// Join the indexes together