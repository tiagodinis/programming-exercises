// Problem: https://leetcode.com/problems/hamming-distance/

function hammingDistance(x: number, y: number): number {
  let res = 0;

  for (let num = x ^ y; num; ) {
    res += num % 2;
    num >>= 1;
  }

  return res;
}
