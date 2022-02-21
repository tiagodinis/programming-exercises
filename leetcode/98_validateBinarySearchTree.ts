// Problem: https://leetcode.com/problems/validate-binary-search-tree/

import { btNode } from "../utilities/binaryTree";

function isValidBST(root: btNode): boolean {
  return (
    isValidBSTWithPath(root!.left, [{ val: root!.val, left: true }]) &&
    isValidBSTWithPath(root!.right, [{ val: root!.val, left: false }])
  );
}

type pathElem = { val: number; left: boolean };

function isValidBSTWithPath(root: btNode, path: pathElem[]): boolean {
  if (!root) return true;

  for (let i = 0; i < path.length; i++) {
    if (path[i].left && root.val >= path[i].val) return false;
    if (!path[i].left && root.val <= path[i].val) return false;
  }

  return (
    isValidBSTWithPath(root.left, [{ val: root.val, left: true }, ...path]) &&
    isValidBSTWithPath(root.right, [{ val: root.val, left: false }, ...path])
  );
}
