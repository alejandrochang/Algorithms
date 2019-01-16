

// time complexity O(n) - linear
// time complexity O(1) - constant

function oneAway(str1, str2) {
  let edits = 1;
  let maxLength = Math.max(str1.length, str2.length);
  let difference = Math.abs(str1.length - str2.length);

  if (difference > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
    let c1 = str1[i];
    let c2 = str2[j];

    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }

      if (c1 === str2[j + 1]) { // inserted
        j++;
      } else if (str1[i + 1] === c2) { // removed
        i++;
      }
    }
  }

  return true;
}


console.log(oneAway("pale", "ple"))   //  true
console.log(oneAway("pales", "pale")) //  true
console.log(oneAway("pale", "bale"))  //  true
console.log(oneAway("pale", "bake"))  //  false


// if insert, then s1 current char should match s2s next char
// if removed, then s1 next char should match s2s current char
// if replaced, then s1 next char should match s2s next char



// function oneAway(str1, str2) {
//   let edits = 1; // number of edits we can do at most 
//   let maxLength = Math.max(str1.length, str2.length);
//   let difference = Math.abs(str1.length - str2.length);

//   if (difference > edits) {
//     return false;
//   }

  // for (let i = 0, j = 0; i < maxLength || j < maxLength; i++ , j++) {
  //   let c1 = str1[i];
  //   let c2 = str2[j];
  //   if (c1 !== c2) {
  //     edits--;
  //     if (edits < 0) {
  //       return false;
  //     }
    //   if (c1 === str2[j + 1]) { // inserted
    //     j++;
    //   } else if (str1[i + 1] === c2) { // removed
    //     i++;
    //   }
    // }
  // }

//   return true;
// }