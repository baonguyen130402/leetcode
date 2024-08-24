/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      result -= symbols[s[i]];
    } else {
      result += symbols[s[i]];
    }
  }

  return result
};

console.log(romanToInt("XIX"))
