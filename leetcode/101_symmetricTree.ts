// Problem: https://leetcode.com/problems/symmetric-tree/

import { btNode } from "../utilities/binaryTree";

function isSymmetricTree(root: btNode): boolean {
  return equalNodesRec(root!.left, root!.right);
}

function equalNodesRec(a: btNode, b: btNode): boolean {
  if (a === null && b === null) return true;
  else if (a !== null && b !== null) {
    if (a.val !== b.val) return false;
    return equalNodesRec(a.left, b.right) && equalNodesRec(a.right, b.left);
  } else return false;
}
