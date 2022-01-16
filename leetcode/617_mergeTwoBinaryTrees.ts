// Problem: https://leetcode.com/problems/merge-two-binary-trees/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";

function mergeTrees(root1: btNode, root2: btNode): btNode {
  if (!root1 && !root2) return null;

  if (!root1) root1 = new BinaryTreeNode();
  if (!root2) root2 = new BinaryTreeNode();
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
}
