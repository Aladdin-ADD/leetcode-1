/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const upperChars = { A: true, B: true, C: true, D: true, E: true, F: true, G: true, H: true, I: true, J: true, K: true, L: true, M: true, N: true, O: true, P: true, Q: true, R: true, S: true, T: true, U: true, V: true, W: true, X: true, Y: true, Z: true };

  var capitalAmount = 0;
  for (var i = 0; i < word.length; ++i) {
    if (upperChars[word[i]]) ++capitalAmount;
  }

  return capitalAmount === word.length || !capitalAmount || !!(capitalAmount === 1 && upperChars[word[0]]);
};

console.log(detectCapitalUse("ffffffffffffffffffffF"));
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('hehe'));
console.log(detectCapitalUse('FlaG'));