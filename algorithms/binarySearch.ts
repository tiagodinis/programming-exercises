function binarySearch(arr: any[], target: any) {
  let mid: number = 0;
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    mid = Math.trunc((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return undefined;
}
