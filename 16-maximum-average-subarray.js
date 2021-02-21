function findMaxAverage(nums, k) {
  let upper = nums.length - k + 1
  let subSum = nums.slice(0, k).reduce((a, b) => a + b);
  let max = subSum;
  for (let i = 1; i < upper; i++) {
    subSum = subSum - nums[i-1] + nums[i+k-1];
    if (subSum > max) max = subSum;
  }
  return max/k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))