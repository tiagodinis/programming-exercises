// Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/

import { btNode } from "../utilities/binaryTree";

function maxDepth(root: btNode): number {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
}
