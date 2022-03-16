// Problem: https://leetcode.com/problems/middle-of-the-linked-list/

import { lNode } from "../utilities/linkedList";

function middleNode(head: lNode): lNode {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}
