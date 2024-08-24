/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
  const numberGetFromDigits = BigInt(digits.join(""));

  const result = (numberGetFromDigits + BigInt(1))
    .toString()
    .split("")
    .map(Number);

  return result;
};

console.log(plusOne([1, 2, 0, 9]));
