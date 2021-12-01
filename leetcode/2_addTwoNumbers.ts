// Problem: https://leetcode.com/problems/add-two-numbers/

import { ListNode, lNode } from "../utilities/linkedList";

function addTwoNumbers(l1: lNode, l2: lNode): lNode {
  let dummy: lNode = new ListNode();
  let current: lNode = dummy;
  let val: number;
  let carry: number = 0;

  while (l1 || l2 || carry) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val > 9 ? 1 : 0;
    if (carry) val -= 10;
    current.next = new ListNode(val);

    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
