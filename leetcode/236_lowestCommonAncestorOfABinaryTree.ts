// Problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

import { btNode } from "../utilities/binaryTree";

function lowestCommonAncestor(root: btNode, p: btNode, q: btNode): btNode {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (right && left) return root;
  if (left) return left;
  if (right) return right;
  return null;
}
