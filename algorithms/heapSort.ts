function heapSort(arr: number[]) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function buildMaxHeap(arr: number[]) {
  for (let i = Math.trunc(arr.length / 2); i >= 0; i--)
    heapify(arr, arr.length, i);
}

function heapify(arr: number[], n: number, i: number) {
  let left = 2 * i;
  let right = left + 1;

  // If largest val is left or right, swap it with root and continue "heapifying"
  let max = i;
  if (left < n && arr[left] > arr[max]) max = left;
  if (right < n && arr[right] > arr[max]) max = right;
  if (max !== i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    heapify(arr, n, max);
  }
}
