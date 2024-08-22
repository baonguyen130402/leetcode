/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let replace = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[replace] = nums[i];
      replace += 1;
    }
  }

  return replace;
};

const nums = [1, 1, 2, 2, 3, 4];
console.log(removeDuplicates(nums));
