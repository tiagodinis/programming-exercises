// Problem: https://leetcode.com/problems/path-sum-ii/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";

// Recursive bottom up
function pathSum(root: btNode, sum: number): number[][] {
  if (!root) return [];
  if (root.val === sum && !root.left && !root.right) return [[root.val]];
  let left = pathSum(root.left, sum - root.val);
  let combined = left.concat(pathSum(root.right, sum - root.val));
  return combined.map((c) => [root.val, ...c]);
}

// Recursive top down
function pathSumTopDown(root: btNode, sum: number): number[][] {
  let res: number[][] = [];
  scout(root, sum, [], res);
  return res;
}

function scout(root: btNode, sum: number, path: number[], res: number[][]) {
  if (root) {
    path.push(root.val);
    if (root.val === sum && !root.left && !root.right) res.push(path);
    scout(root.left, sum - root.val, path.slice(), res);
    scout(root.right, sum - root.val, path.slice(), res);
  }
}

// Iterative BFS
function pathSumQueue(root: btNode, sum: number): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  let queue: [btNode, number, number[]][] = [
    [root, sum - root.val, [root.val]],
  ];

  for (let path: number[] = []; queue.length > 0; ) {
    [root, sum, path] = queue.shift()!;
    if (!root) continue;
    if (sum === 0 && !root.left && !root.right) res.push(path);
    if (root.left)
      queue.push([root.left, sum - root.left.val, path.concat(root.left.val)]);
    if (root.right)
      queue.push([
        root.right,
        sum - root.right.val,
        path.concat(root.right.val),
      ]);
  }

  return res;
}

// Iterative DFS
function pathSumStack(root: btNode, sum: number): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  let stack: [btNode, number, number[]][] = [
    [root, sum - root.val, [root.val]],
  ];

  for (let path: number[] = []; stack.length > 0; ) {
    [root, sum, path] = stack.pop()!;

    if (!root) continue;
    if (sum === 0 && !root.left && !root.right) res.push(path);
    if (root.left)
      stack.push([root.left, sum - root.left.val, path.concat(root.left.val)]);
    if (root.right)
      stack.push([
        root.right,
        sum - root.right.val,
        path.concat(root.right.val),
      ]);
  }

  return res;
}

let root: btNode = new BinaryTreeNode(
  1,
  new BinaryTreeNode(3),
  new BinaryTreeNode(3)
);

// console.log(pathSum(root, 4));
console.log(pathSumQueue(root, 4));
