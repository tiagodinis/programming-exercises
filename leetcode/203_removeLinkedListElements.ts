// Problem: https://leetcode.com/problems/remove-linked-list-elements/

import { lNode } from "../utilities/linkedList";

function removeElements(head: lNode, val: number): lNode {
  while (head?.val === val) head = head.next;

  let start = head;

  while (head) {
    while (head.next?.val === val) head.next = head.next.next;
    head = head.next;
  }

  return start;
}
