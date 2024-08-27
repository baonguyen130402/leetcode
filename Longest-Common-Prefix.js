/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ""
  
  for (let i = 0; i < strs[0].length; i++) {
    if (!strs.every((char) => char[i] === strs[0][i])) {
      return strs[0].slice(0, i)
    }
  }

  return strs[0]
};

const wordsArray = ["flower", "flash", "flame"]
console.log(longestCommonPrefix(wordsArray))
