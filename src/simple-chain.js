const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value = String(value);

    if (value) {
      this.chain.push(` ${value} `);
    } else {
      this.chain.push("()");
    }
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || position <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    console.log(res);
    return res;
  },
};

module.exports = {
  chainMaker,
};
