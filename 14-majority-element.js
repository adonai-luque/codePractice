function majorityElement(nums) {
  let numsMap = {};
  let maxCount = 0;
  let element = nums[0];
  nums.forEach((n) => {
    numsMap[n] = numsMap[n] + 1 || 1;
    if (numsMap[n] > maxCount) {
      maxCount = numsMap[n];
      element = n;
    }
  })
  return element;
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
