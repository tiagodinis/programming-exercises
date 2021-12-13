// Problem: https://leetcode.com/problems/merge-two-sorted-lists/

import { ListNode, lNode } from "../utilities/linkedList";

function mergeTwoLists(l_1: lNode, l_2: lNode): lNode {
  let merged: lNode = new ListNode();
  let dummy: lNode = merged;

  while (l_1 && l_2) {
    if (l_1.val < l_2.val) {
      merged.next = new ListNode(l_1.val);
      merged = merged.next;
      l_1 = l_1.next;
    } else {
      merged.next = new ListNode(l_2.val);
      merged = merged.next;
      l_2 = l_2.next;
    }
  }

  merged.next = l_1 ? l_1 : l_2 ? l_2 : null;
  merged = merged.next;

  return dummy.next;
}
