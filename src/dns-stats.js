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
 function getDNSStats(domains) {
  if (domains.length === 0) {
    return {}
  }
  let dom = "";
  let sum = {};

  if (!domains) {
    return {};
  } else {
    domains.forEach((el, ind) => {
      dom += el.split(".");
      if (ind !== domains.length - 1) {
        dom += ",";
      }
    });
  }
  dom = dom.replace(" ", "");
  dom = dom.split(",");
  dom.reverse().forEach((l) => {
    if (!sum[l]) {
      sum[l] = 1;
    } else {
      sum[l]++;
    }
  });
  const keys = Object.keys(sum); // com, epam
  let answer = {};
  let dos = "";
  for (const key of keys) {
    dos += "." + key;
    answer[dos] = sum[key];
  }

  return answer;
}

module.exports = {
  getDNSStats
};
