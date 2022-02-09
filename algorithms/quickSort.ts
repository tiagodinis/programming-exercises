function partition(arr: number[], start: number, end: number) {
  let pivot = arr[end];
  let index = start;

  for (let i = index; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }

  [arr[index], arr[end]] = [arr[end], arr[index]];
  return index;
}

function quickSort(arr: number[], start: number, end: number) {
  if (start < end) {
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
}
