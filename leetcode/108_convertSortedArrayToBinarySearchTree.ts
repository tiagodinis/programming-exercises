// Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";

function sortedArrayToBST(nums: number[]): btNode {
  if (!nums.length) return null;

  let mid = Math.trunc(nums.length / 2);

  return new BinaryTreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );
}
