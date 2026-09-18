// Solution: Longest Common Prefix
// Runtime: 0 ms | Memory: 56.3 MB

function longestCommonPrefix(strs: string[]): string {
  let result = "";

  let smallestString = strs[0] ?? "";
  for (let i = 1; i < strs.length; i++) {
    if (strs[i]!.length < smallestString?.length) {
      smallestString = strs[i]!;
    }
  }

  for (let i = 0; i < smallestString.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j]![i] !== smallestString[i]) {
        return result;
      }
    }

    result += smallestString[i];
  }
  return result;
}
