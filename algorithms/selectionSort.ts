export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minI = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minI]) minI = j;
    }
    [arr[minI], arr[i]] = [arr[i], arr[minI]];
  }

  return arr;
}
