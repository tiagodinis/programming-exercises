// Problem: https://leetcode.com/problems/linked-list-components/

import { lNode } from "../utilities/linkedList";

function numComponents(head: lNode, nums: number[]): number {
  let res = 0;
  let inComponent = false;
  const set = new Set(nums);

  while (set.size) {
    const hasVal = set.has(head!.val);
    res += hasVal && !inComponent ? 1 : 0;
    inComponent = hasVal;

    set.delete(head!.val);
    head = head!.next;
  }

  return res;
}
