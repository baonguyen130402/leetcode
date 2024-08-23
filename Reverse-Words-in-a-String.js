/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) =>
  s.trim().split(" ").filter((word) => word !== "").reverse().join(" ");

console.log(reverseWords("  reverse   word in    a string "))
