// Problem: https://leetcode.com/problems/relative-sort-array/

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let lastSorted = 0;

  for (let i = 0; i < arr2.length; i++) {
    const curr = arr2[i];
    for (let l = lastSorted, r = arr1.length - 1; l < r; ) {
      while (l <= r && arr1[l] === curr) l++;
      while (l <= r && arr1[r] !== curr) r--;
      if (l <= r) {
        [arr1[l], arr1[r]] = [arr1[r], arr1[l]];
        l++;
        r--;
        lastSorted = l;
      }
      lastSorted = l;
    }
  }

  for (let i = lastSorted + 1; i < arr1.length; i++)
    for (let j = i; j > lastSorted && arr1[j] < arr1[j - 1]; j--)
      [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]];

  return arr1;
}
