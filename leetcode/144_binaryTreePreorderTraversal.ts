// Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/

import { btNode } from "../utilities/binaryTree";

function preorderTraversal(root: btNode): number[] {
  if (!root) return [];
  let res: number[] = [];
  res.push(root.val);
  res.push(...preorderTraversal(root.left));
  res.push(...preorderTraversal(root.right));
  return res;
}
