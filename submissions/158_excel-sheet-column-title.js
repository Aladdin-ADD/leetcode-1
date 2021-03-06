/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var result = [];
  while (n > 26) {
    if (n % 26 === 0) {
      result.unshift(90);
      n = n / 26 - 1;
      break;
    } else {
      result.unshift(n % 26 + 64);
      n = parseInt(n / 26);
    }
  }
  result.unshift(n + 64);

  return String.fromCharCode.apply(null, result);
};