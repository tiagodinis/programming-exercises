// Problem: https://leetcode.com/problems/shortest-palindrome/

function shortestPalindrome(s: string) {
  if (s.length === 0) return s;

  let minMirror = "";
  let maybePalindrome = "";
  let l = 0;
  let r = s.length - 1;

  for (; s[l] === s[0] && s[r] === s[0]; ++l, --r) maybePalindrome += s[r];
  if (s[r] === s[0]) {
    // One more element to the right, check for palindrome next
    minMirror = s[0];
    r--;
  }
  let searchingPalindrome = true;

  while (l < r) {
    if (searchingPalindrome && s[l] !== s[r]) {
      l = 0;
      if (maybePalindrome.length > 0) {
        minMirror += maybePalindrome[0];
        r += maybePalindrome.length - 1;
        maybePalindrome = "";
      }

      // minMirror += maybePalindrome;
      searchingPalindrome = false;
      continue;
    } else if (!searchingPalindrome && s[l] === s[r]) {
      searchingPalindrome = true;
    }

    if (searchingPalindrome) {
      maybePalindrome += s[r];
      l++;
      r--;
    } else {
      minMirror += s[r];
      r--;
    }
  }

  return minMirror + s;
}
