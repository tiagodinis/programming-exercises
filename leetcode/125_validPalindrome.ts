// Problem: https://leetcode.com/problems/valid-palindrome/

function validPalindrome(s: string): boolean {
  for (let l: number = 0, r: number = s.length - 1; l <= r; l++, r--) {
    while (!isAlphaNumeric(s[l])) {
      l++;
      if (l > r) return true;
    }
    while (!isAlphaNumeric(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
  }
  return true;
}

function isAlphaNumeric(str: string) {
  let code = str.charCodeAt(0);
  return (
    (code > 47 && code < 58) || // numeric (0-9)
    (code > 64 && code < 91) || // upper alpha (A-Z)
    (code > 96 && code < 123) // lower alpha (a-z)
  );
}
