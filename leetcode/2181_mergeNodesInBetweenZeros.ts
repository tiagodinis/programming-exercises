// Problem: https://leetcode.com/problems/merge-nodes-in-between-zeros/

import { lNode } from "../utilities/linkedList";

function mergeNodes(head: lNode): lNode {
  let cursor = head!.next;

  while (cursor && cursor.next) {
    const nextVal = cursor.next.val;
    cursor.val += nextVal;
    cursor.next = cursor.next.next;
    if (!nextVal) cursor = cursor.next;
  }

  return head!.next;
}
