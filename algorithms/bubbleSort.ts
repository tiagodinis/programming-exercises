export function bubbleSort(arr: number[]) {
  let swappedOnce: boolean;
  for (let i = 0; i < arr.length; i++) {
    swappedOnce = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swappedOnce = true;
      }
    }
    if (!swappedOnce) break;
  }

  return arr;
}
