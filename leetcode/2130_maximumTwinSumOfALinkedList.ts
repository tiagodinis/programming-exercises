// Problem: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

import { lNode } from "../utilities/linkedList";

function pairSum(head: lNode): number {
  let maxPairSum = 0;
  let previous = null;
  let left = head;
  let right = head!.next;

  // Find middle (stopping at left twin) while reversing half of the list
  while (right?.next) {
    const leftNext = left!.next;
    left!.next = previous;
    previous = left;
    left = leftNext;
    right = right.next.next;
  }
  right = left!.next;
  left!.next = previous;

  // Find maxPairSum
  while (left) {
    maxPairSum = Math.max(maxPairSum, left.val + right!.val);
    left = left.next;
    right = right!.next;
  }

  return maxPairSum;
}
