// Problem: https://leetcode.com/problems/valid-palindrome-ii/

function validPalindromeII(s: string): boolean {
  return hasPalindrome(s, 1, 0, s.length - 1);
}

function hasPalindrome(s: string, lives: number, l, r): boolean {
  for (; l <= r; l++, r--) {
    if (s[l] !== s[r]) {
      if (lives-- === 0) return false;
      return (
        hasPalindrome(s, lives, l + 1, r) || hasPalindrome(s, lives, l, r - 1)
      );
    }
  }
  return true;
}
