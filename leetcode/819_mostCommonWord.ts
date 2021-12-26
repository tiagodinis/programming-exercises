// Problem: https://leetcode.com/problems/most-common-word/

interface WordHash {
  [k: string]: number;
}

function mostCommonWord(paragraph: string, bannedArr: string[]): string {
  let res = "";
  let occurrences: WordHash = {};
  let banned = new Set(bannedArr);

  let words = paragraph
    .replace(/[!?',;.]/g, " ")
    .toLowerCase()
    .split(/[ ]+/);
  for (let i = 0; i < words.length; ++i) {
    if (banned.has(words[i])) continue;
    occurrences[words[i]] = (occurrences[words[i]] || 0) + 1;
    if (!res.length || occurrences[words[i]] > occurrences[res]) res = words[i];
  }

  return res;
}
