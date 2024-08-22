/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s) => {
  const splitString = s.trim().split(" ");

  return splitString[splitString.length - 1].split("").length;
};

const s = " Hello World "
console.log(lengthOfLastWord(s))

