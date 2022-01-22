// Problem: https://leetcode.com/problems/print-binary-tree/

import { BinaryTreeNode, createBinaryTree } from "../utilities/binaryTree";
import { maxDepth } from "./104_maximumDepthOfBinaryTree";

function printTree(root: BinaryTreeNode): string[][] {
  const rows = maxDepth(root);
  const cols = Math.pow(2, rows) - 1;

  type NodeCol = { node: BinaryTreeNode; col: number };
  let queue: NodeCol[] = [{ node: root, col: Math.trunc((cols - 1) / 2) }];

  let res: string[][] = [];

  for (let height = 0; queue.length; height++) {
    let nrLvlNodes = queue.length;
    let row = Array(cols).fill("");
    for (let i = 0; i < nrLvlNodes; i++) {
      let { node, col } = queue.shift()!;
      row[col] = node.val.toString();
      const offset = Math.pow(2, rows - 2 - height);
      if (node.left) queue.push({ node: node.left, col: col - offset });
      if (node.right) queue.push({ node: node.right, col: col + offset });
    }
    res.push(row);
  }

  return res;
}
