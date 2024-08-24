/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome1 = (x) => {
  const reverseX = Number(x.toString().split("").reverse().join(""));

  if (reverseX !== x) {
    return false;
  }

  return true;
};

const isPalindrome2 = (x) => {
  const splitX = x.toString().split("")

  for (let i = 0; i < splitX.length; i++) {
    if (splitX[i] !== splitX[splitX.length - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome1(-121));
console.log(isPalindrome2(-121));
