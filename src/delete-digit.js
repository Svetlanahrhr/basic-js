const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  n = String(n).split('')
 let length = n.length
 // let temp = n
 let maxArr = []
 for (let i =0; i < length; i++) {
   temp = n[i]
   delete n[i]
   maxArr.push(Number(n.join('')));
   n[i] = temp
 }
 maxArr.sort((a,b) => a-b)
 return maxArr[length-1]
}

module.exports = {
  deleteDigit
};
