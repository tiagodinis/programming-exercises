// Problem: https://leetcode.com/problems/invert-binary-tree/

import { btNode } from "../utilities/binaryTree";

function invertTree(root: btNode): btNode {
  if (!root) return null;
  [root.right, root.left] = [root.left, root.right];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
