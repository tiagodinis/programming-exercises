// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let hash: Record<string, number> = {};
  let maxLength: number = 0;

  for (let end = 0, start = -1; end < s.length; ++end) {
    if (hash[s[end]] > start) start = hash[s[end]];
    hash[s[end]] = end;
    maxLength = Math.max(maxLength, end - start);
  }

  return maxLength;
}
