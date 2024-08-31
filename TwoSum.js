/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const hashMap = {} 

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (hashMap[target - num] !== undefined) {
      return [i, hashMap[target - num]]
    } 
    
    hashMap[num] = i
  }
};
