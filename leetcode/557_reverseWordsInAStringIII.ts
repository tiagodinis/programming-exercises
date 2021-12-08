// Problem: https://leetcode.com/problems/reverse-words-in-a-string-iii/

function reverseWords(s: string): string {
  let res: string[] = [];
  for (let words = s.split(" "), i = 0; i < words.length; ++i) {
    let word = [...words[i]];
    for (let l = 0, r = word.length - 1; l < r; ++l, --r)
      [word[r], word[l]] = [word[l], word[r]];
    res.push(word.join(""));
  }
  return res.join(" ");
}
