// Problem: https://leetcode.com/problems/leaf-similar-trees/

import { btNode } from "../utilities/binaryTree";

// Naive
function leafSimilar(root1: btNode, root2: btNode): boolean {
  const leafs1 = getLeafSequence(root1);
  const leafs2 = getLeafSequence(root2);

  if (leafs1.length !== leafs2.length) return false;

  for (let i = 0; i < leafs1.length; i++)
    if (leafs1[i] !== leafs2[i]) return false;

  return true;
}

function getLeafSequence(root: btNode): number[] {
  let res: number[] = [];
  let stack: btNode[] = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    if (!current.left && !current.right) res.push(current.val);

    current = current.right;
  }

  return res;
}

// Early return
function leafSimilarEarly(root1: btNode, root2: btNode): boolean {
  let getNextLeaf1 = createGetNextLeaf(root1);
  let getNextLeaf2 = createGetNextLeaf(root2);
  let leaf1 = getNextLeaf1();
  let leaf2 = getNextLeaf2();
  while (leaf1 && leaf2) {
    if (leaf1.val !== leaf2.val) return false;
    leaf1 = getNextLeaf1();
    leaf2 = getNextLeaf2();
  }

  return !leaf1 && !leaf2;
}

function createGetNextLeaf(root: btNode) {
  let stack: btNode[] = [];
  let current = root;
  function getNextLeaf(): btNode {
    let leaf = null;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop()!;
      if (current.left === null && current.right === null) {
        leaf = current;
        current = current.right;
        return leaf;
      }

      current = current.right;
    }

    return leaf;
  }
  return getNextLeaf;
}
