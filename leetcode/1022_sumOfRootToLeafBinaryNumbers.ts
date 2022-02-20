// Problem: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

import { btNode } from "../utilities/binaryTree";

function sumRootToLeaf(root: btNode): number {
  return sumLeafPaths(root, "");
}

function sumLeafPaths(root: btNode, path: string): number {
  if (!root) return 0;

  path += root.val;
  if (!root.left && !root.right) return parseInt(path, 2);
  else return sumLeafPaths(root.left, path) + sumLeafPaths(root.right, path);
}
