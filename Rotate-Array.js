/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
  k %= nums.length;

  const reverse = (left, right) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  };

  // Reverse all array
  reverse(0, nums.length - 1);

  // Reverse first index to k - 1
  reverse(0, k - 1);

  // Reverse k to last index of num
  reverse(k, nums.length - 1);

  return nums
};

const r = rotate([4, 2, 3, 6], 2)
console.log(r)
