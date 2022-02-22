// Problem: https://leetcode.com/problems/validate-binary-search-tree/

import { btNode } from "../utilities/binaryTree";

// Second
function isValidBST2(root: btNode): boolean {
  return helper2(root, -Infinity, Infinity);
}

function helper2(root: btNode, min: number, max: number): boolean {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;
  return (
    helper2(root.left, min, root.val) && helper2(root.right, root.val, max)
  );
}

// First
function isValidBST(root: btNode): boolean {
  return (
    helper(root!.left, [{ val: root!.val, left: true }]) &&
    helper(root!.right, [{ val: root!.val, left: false }])
  );
}

type pathElem = { val: number; left: boolean };

function helper(root: btNode, path: pathElem[]): boolean {
  if (!root) return true;

  for (let i = 0; i < path.length; i++) {
    if (path[i].left && root.val >= path[i].val) return false;
    if (!path[i].left && root.val <= path[i].val) return false;
  }

  return (
    helper(root.left, [{ val: root.val, left: true }, ...path]) &&
    helper(root.right, [{ val: root.val, left: false }, ...path])
  );
}
