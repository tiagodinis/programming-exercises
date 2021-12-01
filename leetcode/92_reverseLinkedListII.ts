// Problem: https://leetcode.com/problems/reverse-linked-list-ii/

import {
  createLinkedList,
  ListNode,
  lNode,
  printLinkedList,
} from "../utilities/linkedList";

// Simpler version
function reverseBetween(head: lNode, left: number, right: number): lNode {
  let dummy = new ListNode(0, head);
  let prev: any = dummy;
  for (let i = 0; i < left - 1; ++i) prev = prev.next;
  for (let current: any = prev.next, i = 0; i < right - left; ++i) {
    let then = current.next;
    current.next = then.next;
    then.next = prev.next;
    prev.next = then;
  }
  return dummy.next;
}

// First version
function reverseBetweenFirst(head: lNode, left: number, right: number): lNode {
  if (left === right) return head;

  let current: lNode = head;
  let prev: lNode = null;
  let reverseHeadPrev: lNode = null;
  let reverseTail: lNode = null;
  let n = 1;

  while (current) {
    if (n === left) {
      if (prev) reverseHeadPrev = prev;
      reverseTail = current;
    }
    if (n === right && reverseTail) {
      if (reverseHeadPrev) {
        reverseHeadPrev.next = current;
      } else head = current;
      reverseTail.next = current.next;
    }
    if (n >= left && n <= right) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    } else {
      prev = current;
      current = current.next;
    }

    n++;
  }

  return head;
}
