// Problem: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/

function plusMinus(arr: number[]): void {
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
