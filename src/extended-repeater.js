const { NotImplementedError } = require('../extensions/index.js');

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
  let sum = ''
if (options.repeatTimes && options.separator && options.addition && options.additionRepeatTimes && options.additionSeparator) {
  for (let i = 0; i < options.repeatTimes; i++) {
      sum+=str
      for (let i = 0; i < options.additionRepeatTimes; i++) {
      sum+=options.addition+options.additionSeparator
      }
      if (i !== options.repeatTimes) {
          sum+=options.separator
      }
      
  }
}
console.log(sum);
}

module.exports = {
  repeater
};
