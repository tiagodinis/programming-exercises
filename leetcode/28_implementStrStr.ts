// Problem: https://leetcode.com/problems/implement-strstr/

function strStrKMP(haystack: string, needle: string): number {
  if (!needle.length) return 0;

  let table = preprocess(needle);

  for (let i = 0, j = 0; i < haystack.length; ++i) {
    j = table[Math.max(j - 1, 0)];
    for (; needle[j] === haystack[i + j] && j < needle.length; ++j);
    if (j === needle.length) return i;
  }

  return -1;
}

function preprocess(needle: string): number[] {
  let table = Array(needle.length).fill(0);
  for (let i = 1, j = 0; i < needle.length; ) {
    if (needle[i] === needle[j]) table[i++] = j++ + 1;
    else {
      if (j === 0) table[i++] = 0;
      else j = table[j - 1];
    }
  }

  return table;
}

function strStrNaive(haystack: string, needle: string): number {
  if (!needle.length) return 0;

  for (let i = 0, j = 0; i < haystack.length - (needle.length - 1); ++i) {
    for (j = 0; needle[j] === haystack[i + j] && j < needle.length; ++j);
    if (j === needle.length) return i;
  }

  return -1;
}
