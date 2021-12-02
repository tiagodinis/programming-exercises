// Problem: https://leetcode.com/problems/binary-tree-postorder-traversal/

import { btNode } from "../utilities/binaryTree";

function postorderTraversal(root: btNode): number[] {
  if (!root) return [];
  let res: number[] = [];
  res.push(...postorderTraversal(root.left));
  res.push(...postorderTraversal(root.right));
  res.push(root.val);
  return res;
}
