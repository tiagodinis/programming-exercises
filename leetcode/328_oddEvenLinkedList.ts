// Problem: https://leetcode.com/problems/odd-even-linked-list/

import { lNode } from "../utilities/linkedList";

function oddEvenList(head: lNode): lNode {
  if (!head) return null;
  if (!head.next) return head;

  let odd: lNode = head;
  let even: lNode = head.next;

  while (even.next) {
    const headEven = odd.next;
    odd.next = even.next;
    even.next = even.next!.next;
    odd.next!.next = headEven;

    if (odd.next) odd = odd.next;
    if (even.next) even = even.next;
  }

  return head;
}
