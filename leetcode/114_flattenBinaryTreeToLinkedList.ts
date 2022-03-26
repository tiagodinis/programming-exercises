// Problem: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

import { btNode } from "../utilities/binaryTree";

function flatten(root: btNode): void {
  scout(root);
}

// Returns tail
function scout(root: btNode): btNode {
  if (!root) return null;

  const rightTail = scout(root.right);
  const leftTail = scout(root.left);
  if (leftTail) leftTail.right = root.right;
  if (root.left) {
    root.right = root.left;
    root.left = null;
  }

  return rightTail ? rightTail : leftTail ? leftTail : root;
}
