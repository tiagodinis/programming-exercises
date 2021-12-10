// Problem: https://leetcode.com/problems/roman-to-integer/

const indices: Record<string, number> = {
  I: 0,
  V: 1,
  X: 2,
  L: 3,
  C: 4,
  D: 5,
  M: 6,
};

const values = [1, 5, 10, 50, 100, 500, 1000];

function romanToInt(s: string): number {
  let sum = 0;

  for (let i = s.length; i--; ) {
    let index = indices[s[i]];
    let nextIndex = indices[s[i - 1]];
    sum += values[index];
    if (nextIndex === index - (((index + 1) % 2) + 1)) {
      sum -= values[nextIndex];
      i--;
    }
  }

  return sum;
}
