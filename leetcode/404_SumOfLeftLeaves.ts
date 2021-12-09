// Problem: https://leetcode.com/problems/sum-of-left-leaves/

import { btNode, createBinaryTree } from "../utilities/binaryTree";

function sumOfLeftLeaves(root: btNode): number {
  if (!root) return 0;
  let leftVal =
    root.left && !root.left.left && !root.left.right
      ? root.left.val
      : sumOfLeftLeaves(root.left);
  return leftVal + sumOfLeftLeaves(root.right);
}

console.log(sumOfLeftLeaves(createBinaryTree([3, 9, 20, null, null, 15, 7])));
