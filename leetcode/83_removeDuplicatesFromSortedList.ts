// Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

import { lNode } from "../utilities/linkedList";

function deleteDuplicates(head: lNode): lNode {
  const start = head;
  for (; head; head = head.next) {
    while (head.val === head.next?.val) {
      head.next = head.next.next;
    }
  }
  return start;
}
