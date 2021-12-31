// Problem: https://leetcode.com/problems/balanced-binary-tree/

import { btNode } from "../utilities/binaryTree";

function isBalanced(root: btNode): boolean {
  return searcher(root) !== -1;
}

function searcher(root: btNode): number {
  if (!root) return 0;

  let left = searcher(root.left);
  if (left === -1) return left;
  let right = searcher(root.right);
  if (right === -1) return right;
  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}

// // Initial
// function isBalanced(root: btNode): boolean {
//   return searcher(root)[0];
// }

// function searcher(root: btNode): [boolean, number] {
//   if (!root) return [true, 0];

//   let left = searcher(root.left);
//   let right = searcher(root.right);

//   return [
//     left[0] && right[0] && Math.abs(left[1] - right[1]) < 2,
//     Math.max(left[1], right[1]) + 1,
//   ];
// }
