export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let toInsert = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > toInsert; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = toInsert;
  }

  return arr;
}
