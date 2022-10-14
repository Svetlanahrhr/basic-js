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
 function encodeLine(s1) {
  s1 = s1.split("");
  let sum = "";
  let some1 = {};
  let length1 = s1.length;
  for (let i = 1; i <= length1; i++) {
    if (!some1[`${s1[i - 1]}`] && s1[i - 1] !== s1[i]) {
      sum += String(s1[i - 1]) + "";
    } else if (!some1[`${s1[i - 1]}`]) {
      some1[`${s1[i - 1]}`] = 1;
    } else if (s1[i - 1] === s1[i]) {
      some1[`${s1[i - 1]}`]++;
    } else if (s1[i - 1] !== s1[i] || i === length1) {
      some1[`${s1[i - 1]}`]++;
      sum += String(some1[s1[i - 1]]) + String(s1[i - 1]) + "";
      console.log(some1);
      some1 = {};
    }
  }

  return sum;
}

module.exports = {
  encodeLine
};
