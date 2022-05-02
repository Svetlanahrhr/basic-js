const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('')
  s2 = s2.split('')
  let sum = 0
  let some1 = {}
  let some2 = {}
  let length1 = s1.length
  let length2 = s2.length
 for (let i=0; i<length1; i++) {
   if (!some1[`${s1[i]}`]) {
     some1[`${s1[i]}`] = 1
   } else {
    some1[`${s1[i]}`]++
   }
 }
 for (let j=0; j<length2; j++) {
  if (!some2[`${s2[j]}`]) {
     some2[`${s2[j]}`] = 1
   } else {
    some2[`${s2[j]}`]++
   }
 }
for (key1 in some1) {
  if (some2[key1]) {
    if (some1[key1] > some2[key1]) {
      sum+=some2[key1]
    } else sum+=some1[key1]
  }
}
return sum
}

module.exports = {
  getCommonCharacterCount
};
