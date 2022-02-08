// Problem: https://leetcode.com/problems/binary-tree-pruning/

import { btNode } from "../utilities/binaryTree";

function pruneTree(root: btNode): btNode {
  if (!root) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  return root.left || root.right || root.val === 1 ? root : null;
}
