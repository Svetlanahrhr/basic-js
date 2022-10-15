const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-");
  if (arr.length !== 6) {
    return false
  }
  let res = arr.map((el) => {
    if (el.match(/[0-9]/g) && el.match(/[A-F]/g)) {
      return true;
    } else if (el.match(/[0-9]/g) && !el.match(/[G-Z]/g)) {
      return true;
    } else if (el.match(/[A-F]/g)) {
      return true;
    }
  });
  let now;
  res.forEach((element) => {
    if (!element) {
      now = 1;
    }
  });
  if (now) {
    return false;
  } else return true;
}
module.exports = {
  isMAC48Address,
};
