/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const validAnagrams = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sSort = s.split("").sort().join("");
  const tSort = t.split("").sort().join("");

  return sSort === tSort ? true : false;
};

const r = validAnagrams("cat", "act");
console.log(r)
