const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains ) {
  let dom ='';
  let sum = {}
  let reverseDom 


  if (!domains) {
    return {};
  } else {
      domains.forEach((el,ind) => {
         dom += el.split('.')
         if (ind !== domains.length -1) {
          dom+=','
         }
         
      });
    console.log(typeof dom);
  }
  dom = dom.replace(' ', '')
  console.log(dom);
  dom = dom.split(',')
  console.log(dom);  // ['epam', 'com', 'info', 'epam', 'com']
  dom.forEach(l => {
      if (!sum[l]) {
          sum[l] = 1;
      } else {
          sum[l]++
      }
  })
console.log(dom.reverse());
  dom.reverse().forEach((el,ind) => {

  })
  
  console.log(sum); // {epam: 2, com: 2, info: 1}
  
  return sum;
}

module.exports = {
  getDNSStats
};
