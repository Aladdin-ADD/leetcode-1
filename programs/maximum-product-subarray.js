var maxProduct = function(nums) {
  var maxPos, minNeg, tmp;
  var result = nums[0];

  for (var i = 0, l = nums.length; i < l; ++i) {
    if (nums[i] === 0) {
      result = Math.max(result, 0);
      maxPos = minNeg = undefined;
    } else {
      if (nums[i] > 0) {
        maxPos = maxPos === undefined ? nums[i] : maxPos * nums[i];
        minNeg = minNeg === undefined ? minNeg : minNeg * nums[i];
      } else if (nums[i] < 0) {
        tmp = maxPos;
        maxPos = minNeg === undefined ? minNeg : minNeg * nums[i];
        minNeg = tmp === undefined ? nums[i] : tmp * nums[i];
      }
      var tmpArr = [result];
      if (maxPos !== undefined) tmpArr.push(maxPos);
      if (minNeg !== undefined) tmpArr.push(minNeg);
      result = Math.max.apply(null, tmpArr);
    }
  }

  return result;
};

console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, 0, 3, -2, 4]));