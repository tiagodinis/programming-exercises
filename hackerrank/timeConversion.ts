// Problem: https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/

function timeConversion(s: string): string {
  let res = s.substring(0, s.length - 2);
  let period = s.substr(s.length - 2);
  let hours = parseInt(res.substring(0, 2));
  let rest = res.substring(2);
  if (period === "AM") {
    let newHours = `${hours - (hours === 12 ? 12 : 0)}`;
    while (newHours.length < 2) newHours = "0" + newHours;
    res = `${newHours}${rest}`;
  }
  if (period === "PM") res = `${hours + (hours === 12 ? 0 : 12)}${rest}`;
  return res;
}

function fizzBuzz(n: number): void {
  for (let i = 1; i < n + 1; ++i) {
    let res = "";
    if (i % 3 === 0) res += "Fizz";
    if (i % 5 === 0) res += "Buzz";
    console.log(res.length === 0 ? i : res);
  }
}

fizzBuzz(15);
