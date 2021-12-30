// Problem: https://leetcode.com/problems/binary-tree-paths/

import { btNode } from "../utilities/binaryTree";

function binaryTreePaths(root: btNode): string[] {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val.toString()];

  let left = binaryTreePaths(root.left).map((s) => `${root.val}->${s}`);
  let right = binaryTreePaths(root.right).map((s) => `${root.val}->${s}`);

  return [...left, ...right];
}
