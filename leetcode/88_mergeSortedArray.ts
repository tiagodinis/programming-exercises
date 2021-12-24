function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (--m, --n; n >= 0; ) {
    if (nums1[m] > nums2[n]) {
      [nums1[m], nums1[m + n + 1]] = [nums1[m + n + 1], nums1[m]];
      --m;
    } else {
      [nums2[n], nums1[m + n + 1]] = [nums1[m + n + 1], nums2[n]];
      --n;
    }
  }
}
