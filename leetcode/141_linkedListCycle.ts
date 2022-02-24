// Problem: https://leetcode.com/problems/linked-list-cycle/

import { lNode } from "../utilities/linkedList";

function hasCycle(head: lNode): boolean {
  let walker = head;
  let runner = head;
  while (runner && runner.next) {
    runner = runner.next.next;
    walker = walker.next;
    if (runner === walker) return true;
  }

  return false;
}
