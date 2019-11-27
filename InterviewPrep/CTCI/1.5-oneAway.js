// 1.5 OneAway
// There are three types of edits that can be performed on strings, insert a character,
// remove a character and replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away



console.log(OneAway('pale', 'ple')); // true
console.log(OneAway('pale', 'pale')); // true
console.log(OneAway('pale', 'bale')); // true
console.log(OneAway('pale', 'bake')); // false
