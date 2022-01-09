// Problem: https://leetcode.com/problems/diameter-of-binary-tree/

import { btNode } from "../utilities/binaryTree";

function diameterOfBinaryTree(root: btNode): number {
  return scout(root).maxLength;
}

function scout(root: btNode): { maxLength: number; leafLength: number } {
  if (!root) return { maxLength: 0, leafLength: -1 };

  let left = scout(root.left);
  let right = scout(root.right);

  return {
    leafLength: Math.max(++left.leafLength, ++right.leafLength),
    maxLength: Math.max(
      left.leafLength + right.leafLength,
      Math.max(left.maxLength, right.maxLength)
    ),
  };
}
