// Problem: https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
  let res: string[] = [];
  for (let i = 1; i <= n; i++) {
    const s = `${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}`;
    res.push(s === "" ? i.toString() : s);
  }
  return res;
}

function fizzBuzzAlternative(n: number): string[] {
  let res: string[] = [];
  for (let i = 1; i <= n; i++) res.push(i.toString());
  for (let i = 2; i < n; i += 3) res[i] = "Fizz";
  for (let i = 4; i < n; i += 5) res[i] = "Buzz";
  for (let i = 14; i < n; i += 15) res[i] = "FizzBuzz";
  return res;
}
