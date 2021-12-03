// Problem: https://leetcode.com/problems/path-sum/

import { btNode } from "../utilities/binaryTree";

function hasPathSum(root: btNode, sum: number): boolean {
  if (!root) return false;
  if (root.val === sum && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
