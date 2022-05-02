const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( s1 ) {
  s1 = s1.split('')
  let sum = ''
  let some1 = {}
  let length1 = s1.length
 for (let i=0; i<length1; i++) {
   if (!some1[`${s1[i]}`]) {
     some1[`${s1[i]}`] = 1
   } else {
    some1[`${s1[i]}`]++
   }
 }
 for (key1 in some1) {
   console.log(some1[key1]);
   console.log(key1);
   if (some1[key1] > 1) {
    sum += String(some1[key1])+String(key1)+''
   } else sum += String(key1)+""
 }
 return sum
}

module.exports = {
  encodeLine
};
