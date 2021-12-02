// Problem: https://leetcode.com/problems/reverse-linked-list/

import { lNode } from "../utilities/linkedList";

// Iterative
function reverseLinkedList(head: lNode): lNode {
  let prev: lNode = null;
  while (head) {
    let temp: lNode = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}

// Functional
function reverseLinkedListFunc(head: any): lNode {
  if (head.next === null) return head;

  let newHead: lNode = reverseLinkedListFunc(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
