var countPrimes = function(n) {
  var visited = [];
  for (var i = 2; i < n; ++i) visited[i] = 1;

  for (var i = 2; i < n / 2; ++i) {
    for (var j = i * 2; j < n; j += i) {
      visited[j] = visited[j] + 1;
    }
  }

  var count = 0;
  for (var i = 2; i < n; ++i) {
    if (visited[i] === 1) count++;
  }

  return count;
};

console.log(countPrimes(10));