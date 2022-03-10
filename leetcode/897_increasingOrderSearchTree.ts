// Problem: https://leetcode.com/problems/increasing-order-search-tree/

import { btNode } from "../utilities/binaryTree";

function increasingBST(root: btNode): btNode {
  return flattener(root, null);
}

function flattener(root: btNode, from: btNode): btNode {
  if (!root) return null;

  const leftHead = flattener(root.left, root);
  const rightHead = flattener(root.right, from);
  root.left = null;
  root.right = rightHead ? rightHead : from;

  return leftHead ? leftHead : root;
}
