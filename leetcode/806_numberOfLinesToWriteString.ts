// Problem: https://leetcode.com/problems/number-of-lines-to-write-string/

function numberOfLines(widths: number[], s: string): number[] {
  let [lines, leftover] = [1, 0];

  for (let i = 0; i < s.length; i++) {
    const charWidth = widths[s.charCodeAt(i) - 97];
    leftover += charWidth;
    if (leftover > 100) {
      lines++;
      leftover = charWidth;
    }
  }

  return [lines, leftover];
}
