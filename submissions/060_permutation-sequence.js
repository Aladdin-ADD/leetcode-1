/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  var count = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  var used = [], result = '';
  while (result.length !== n) {
    if (result.length === n - 1) {
      for (var i = 1; i <= n; ++i)
        if (used.indexOf(i) === -1) {
          result += i;
          break;
        }
    } else {
      for (var i = 1; i <= n; ++i) {
        if (used.indexOf(i) === -1) {
          if (k <= count[n - result.length - 1]) {
            result += i;
            used.push(i);
            break;
          } else
            k -= count[n - result.length - 1];
        }
      }
    }
  }
  return result;
};
