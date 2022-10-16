const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  encrypt(str, alp) {
    if (str && alp) {
      this.str = str;
      return str.toUpperCase;
    } else {
      throw new Error();
    }
  }
  decrypt(str, alp) {
    if (str && alp) {
      this.str = str;
      return str.toUpperCase;
    } else {
      throw new Error();
    }
  }
}

// const instance = new VigenereCipheringMachine();
// const vigenereCipheringMachine = instance.calculateDepth.bind(instance);

module.exports = {
  VigenereCipheringMachine,
};
