// Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/

import { btNode } from "../utilities/binaryTree";

// Iterative
function inorderTraversal(root: btNode): number[] {
  let res: number[] = [];
  let stack: btNode[] = [];

  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    res.push(root.val);
    root = root.right;
  }

  return res;
}

// Functional
function inorderTraversalFunc(root: btNode): number[] {
  if (!root) return [];
  let res: number[] = [];
  res.push(...inorderTraversalFunc(root.left));
  res.push(root.val);
  res.push(...inorderTraversalFunc(root.right));
  return res;
}

// Morris
function inorderTraversalMorris(root: btNode): number[] {
  let res: number[] = [];

  while (root) {
    if (root.left) {
      let scout: btNode = root.left;
      for (; scout.right && scout.right !== root; scout = scout.right);
      if (!scout.right) {
        scout.right = root;
        root = root.left;
      } else {
        scout.right = null;
        res.push(root.val);
        root = root.right;
      }
    } else {
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
