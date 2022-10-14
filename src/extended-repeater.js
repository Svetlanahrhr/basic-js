const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = ""+str;
  let sum = "";
  options.repeatTimes ? (options.repeatTimes = options.repeatTimes) : (options.repeatTimes = 1);
  options.separator ? (options.separator = options.separator) : (options.separator = "+");
  options.addition ||  options.addition === false || options.addition === null ? (options.addition = options.addition+'') : (options.addition = "");
  options.additionRepeatTimes ? (options.additionRepeatTimes = options.additionRepeatTimes) : (options.additionRepeatTimes = 1);
  options.additionSeparator ? (options.additionSeparator = options.additionSeparator) : (options.additionSeparator = "|");

  for (let i = 0; i < options.repeatTimes; i++) {
    sum += str;
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      sum += options.addition;
      if (i !== options.additionRepeatTimes - 1) {
        sum += options.additionSeparator;
      }
    }
    if (i !== options.repeatTimes - 1) {
      sum += options.separator;
    }
  }
  return sum;
}

module.exports = {
  repeater,
};
