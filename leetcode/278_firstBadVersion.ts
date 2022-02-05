// Problem: https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1;
    let r = n;
    let mid: number;

    while (l < r) {
      mid = l + Math.trunc((r - l) / 2);
      if (isBadVersion(mid)) r = mid;
      else l = mid + 1;
    }

    return l;
  };
};
