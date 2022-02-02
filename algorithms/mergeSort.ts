export function mergeSort(arr: number[]) {
  if (arr.length < 2) return arr;

  let mid = Math.trunc(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  return merge(leftArray, rightArray);
}

function merge(left: number[], right: number[]) {
  let res: number[] = [];

  let l = 0;
  let r = 0;
  for (; l < left.length && r < right.length; ) {
    if (left[l] < right[r]) res.push(left[l++]);
    else res.push(right[r++]);
  }

  return [...res, ...left.slice(l), ...right.slice(r)];
}
