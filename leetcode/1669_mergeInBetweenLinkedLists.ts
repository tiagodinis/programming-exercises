// Problem: https://leetcode.com/problems/merge-in-between-linked-lists/

import { lNode } from "../utilities/linkedList";

function mergeInBetween(
  list1: lNode,
  a: number,
  b: number,
  list2: lNode
): lNode {
  const start = list1;

  for (let i = 1; i < a; i++) list1 = list1!.next;
  let toRemove = list1!.next;
  list1!.next = list2;

  for (let i = a - 1; i < b; i++) toRemove = toRemove!.next;
  while (list2 && list2.next !== null) list2 = list2.next;
  list2!.next = toRemove;

  return start;
}
