// Problem: https://leetcode.com/problems/print-binary-tree/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";
import { maxDepth } from "./104_maximumDepthOfBinaryTree";

function printTreeBFS(root: BinaryTreeNode): string[][] {
  const rows = maxDepth(root);
  const cols = Math.pow(2, rows) - 1;

  let nodeQueue = [root];
  let colQueue = [Math.trunc((cols - 1) / 2)];
  let res: string[][] = [];

  for (let height = 0, cur = 0; cur < nodeQueue.length; height++) {
    let nrLvlNodes = nodeQueue.length - cur;
    let row = Array(cols).fill("");
    for (let i = 0; i < nrLvlNodes; i++, cur++) {
      let node = nodeQueue[cur];
      let col = colQueue[cur];
      row[col] = node.val.toString();
      const offset = Math.pow(2, rows - 2 - height);
      if (node.left) {
        nodeQueue.push(node.left);
        colQueue.push(col - offset);
      }
      if (node.right) {
        nodeQueue.push(node.right);
        colQueue.push(col + offset);
      }
    }
    res.push(row);
  }

  return res;
}

function printTreeDFS(root: btNode): string[][] {
  const rows = maxDepth(root!);
  const cols = Math.pow(2, rows) - 1;

  let res = [...Array(rows)].map((r) => Array(cols).fill(""));

  function scout(root: btNode, row: number, left: number, right: number) {
    if (!root) return;

    let mid = Math.trunc((left + right) / 2);
    res[row][mid] = root.val.toString();
    scout(root.left, row + 1, left, mid - 1);
    scout(root.right, row + 1, mid + 1, right);
  }

  scout(root, 0, 0, cols - 1);
  return res;
}
