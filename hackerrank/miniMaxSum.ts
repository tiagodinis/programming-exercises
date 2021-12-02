// Problem: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/

function miniMaxSum(arr: number[]): void {
  let min = arr[0];
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }

  console.log(`${sum - max} ${sum - min}`);
}
