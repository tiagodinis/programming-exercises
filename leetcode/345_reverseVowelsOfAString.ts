// Problem: https://leetcode.com/problems/reverse-vowels-of-a-string/

function reverseVowels(s: string): string {
  let res = [...s];
  let regex = /[aeiouAEIOU]/;
  for (let l = 0, r = res.length - 1; l < r; ) {
    let [leftVowel, rightVowel] = [regex.test(res[l]), regex.test(res[r])];
    if (!leftVowel) l++;
    if (!rightVowel) r--;
    if (leftVowel && rightVowel) {
      [res[r], res[l]] = [res[l], res[r]];
      l++;
      r--;
    }
  }
  return res.join("");
}
