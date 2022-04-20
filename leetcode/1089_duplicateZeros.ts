// Problem: https://leetcode.com/problems/duplicate-zeros/

function duplicateZeros(arr: number[]): void {
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) queue.push(arr[i]);
    queue.push(arr[i]);
    arr[i] = queue.shift();
  }
}
