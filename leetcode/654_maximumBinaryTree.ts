// Problem: https://leetcode.com/problems/maximum-binary-tree/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";

function constructMaximumBinaryTree(numbers: number[]): btNode {
  let stack: BinaryTreeNode[] = [];

  for (let i = 0; i < numbers.length; i++) {
    let curr = new BinaryTreeNode(numbers[i]);
    while (stack.length && stack[stack.length - 1].val < numbers[i])
      curr.left = stack.pop()!;

    if (stack.length) stack[stack.length - 1].right = curr;
    stack.push(curr);
  }

  return stack[0];
}

function constructMaximumBinaryTreeNaive(numbers: number[]): btNode {
  if (!numbers.length) return null;

  let max = { val: -1, index: -1 };
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > max.val) max = { val: numbers[i], index: i };

  return new BinaryTreeNode(
    max.val,
    constructMaximumBinaryTreeNaive(numbers.slice(0, max.index)),
    constructMaximumBinaryTreeNaive(numbers.slice(max.index + 1))
  );
}
