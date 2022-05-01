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
  let count = 1
  let some1 = {}
  let some2 = {}
  let length1 = s1.length
  let length2 = s2.length
 for (let i=0; i<length1; i++) {
   some1[s1.splice(s1[i],1)] = 1
   console.log(some1);
 }
 for (let j=0; j<length2; j++) {
   some2[s2.splice(s2[j],1)] = 1
   console.log(some2);
 }
 return some2.length

}

module.exports = {
  getCommonCharacterCount
};
