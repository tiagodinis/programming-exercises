// Problem: https://leetcode.com/problems/license-key-formatting/

function licenseKeyFormatting(s: string, k: number): string {
  let res = "";

  for (let i = s.length - 1, counter = 0; i >= 0; i--) {
    if (s[i] !== "-") {
      res = s[i].toUpperCase() + res;
      if (!(++counter % k)) res = "-" + res;
    }
  }

  while (res[0] === "-") res = res.slice(1);

  return res;
}
