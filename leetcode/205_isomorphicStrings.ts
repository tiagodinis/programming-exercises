// Problem: https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
  const usedTargets = new Set();
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      if (usedTargets.has(t[i])) return false;
      map.set(s[i], t[i]);
      usedTargets.add(t[i]);
    }
  }

  return true;
}
