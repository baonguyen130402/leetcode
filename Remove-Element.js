const removeElement = function(nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count += 1;
    }
  }

  return count;
};

const r = removeElement([3, 2, 2, 3], 2);
console.log(r);
