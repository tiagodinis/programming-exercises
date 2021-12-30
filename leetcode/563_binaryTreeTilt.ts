// Problem: https://leetcode.com/problems/binary-tree-tilt/

import { btNode } from "../utilities/binaryTree";

function findTilt(root: btNode): number {
  return findTiltWithSum(root)[0];
}

// Returns [tiltSum, valueSum]
function findTiltWithSum(root: btNode): [number, number] {
  if (!root) return [0, 0];

  let left = findTiltWithSum(root.left);
  let right = findTiltWithSum(root.right);

  return [
    left[0] + right[0] + Math.abs(left[1] - right[1]),
    left[1] + right[1] + root.val,
  ];
}
