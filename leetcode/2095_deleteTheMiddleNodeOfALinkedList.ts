// Problem: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

import { lNode } from "../utilities/linkedList";

function deleteMiddle(head: lNode): lNode {
  let prevSlow = head;
  let slow = head;
  let fast = head;

  while (fast?.next) {
    prevSlow = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (prevSlow === slow) return null;
  else if (!slow?.next) prevSlow!.next = null;
  else prevSlow!.next = slow.next;

  return head;
}
