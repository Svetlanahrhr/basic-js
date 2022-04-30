const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
   if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
   }
  const cloneArr = Array.from(arr);
  for (let i = 0; i < cloneArr.length; i++) {
    if (cloneArr[i] === "--discard-next") {
      if (cloneArr[i + 1] === undefined) {
        cloneArr.splice([i], 1);
      } else {
        cloneArr.splice([i], 2);
        if (cloneArr[i] === "--double-prev") {
          cloneArr.splice([i], 1);
        } else if (cloneArr[i] === "--discard-prev") {
          cloneArr.splice([i], 1);
        }
      }
    }
    if (cloneArr[i] === "--discard-prev") {
      if (cloneArr[i - 1] === undefined) {
        cloneArr.splice([i], 1);
      } else cloneArr.splice([i - 1], 2);
    }
    if (cloneArr[i] === "--double-next") {
      if (cloneArr[i + 1] === undefined) {
        cloneArr.splice([i], 1);
      } else {
        cloneArr.splice([i], 1);
        cloneArr.splice(i, 0, cloneArr[i]);
      }
    }
    if (cloneArr[i] === "--double-prev") {
      if (cloneArr[i - 1] === undefined) {
        cloneArr.splice([i], 1);
      } else {
        cloneArr.splice([i], 1);
        cloneArr.splice(i, 0, cloneArr[i - 1]);
      }
    }
  }

  return cloneArr;
}

module.exports = {
  transform
};
