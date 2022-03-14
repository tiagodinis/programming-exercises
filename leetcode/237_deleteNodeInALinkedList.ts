// Problem: https://leetcode.com/problems/delete-node-in-a-linked-list/

import { lNode } from "../utilities/linkedList";

function deleteNode(root: lNode): void {
  root.val = root.next!.val;
  root.next = root.next!.next;
}
