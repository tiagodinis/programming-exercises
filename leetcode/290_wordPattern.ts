// Problem: https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;
  const usedTargets = new Set();
  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) return false;
    } else {
      if (usedTargets.has(words[i])) return false;
      map.set(pattern[i], words[i]);
      usedTargets.add(words[i]);
    }
  }

  return true;
}
