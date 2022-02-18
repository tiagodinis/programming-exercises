// Problem: https://leetcode.com/problems/leaf-similar-trees/

import { btNode } from "../utilities/binaryTree";

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
