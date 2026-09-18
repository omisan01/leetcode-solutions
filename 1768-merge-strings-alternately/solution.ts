// Solution: Merge Strings Alternately
// Runtime: 27 ms | Memory: 56 MB

function mergeAlternately(word1: string, word2: string): string {
  let mergedArray = [];
  const n = word1.length;
  const m = word2.length;

  for (let i = 0; i < n || i < m; i++) {
    if (i < n) {
      mergedArray.push(word1.charAt(i));
    }
    if (i < m) {
      mergedArray.push(word2.charAt(i));
    }
  }
  return mergedArray.join("");
}