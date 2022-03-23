// Problem: https://leetcode.com/problems/odd-even-linked-list/

import { lNode } from "../utilities/linkedList";

function oddEvenList(head: lNode): lNode {
  if (!head) return null;

  let odd: lNode = head;
  let even: lNode = head.next;
  let evenHead: lNode = even;

  while (even?.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}
