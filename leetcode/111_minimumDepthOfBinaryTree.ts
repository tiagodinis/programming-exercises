// Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/

import { BinaryTreeNode, btNode } from "../utilities/binaryTree";

// DFS
function minDepthDFS(root: btNode): number {
  if (!root) return 0;
  if (!root.left) return minDepthDFS(root.right) + 1;
  if (!root.right) return minDepthDFS(root.left) + 1;
  return Math.min(minDepthDFS(root.left), minDepthDFS(root.right)) + 1;
}

// BFS
function minDepthBFS(root: btNode): number {
  let queue: btNode[] = root ? [root] : [];
  let depth: number = 0;

  while (queue.length) {
    depth++;
    let nrNodes: number = queue.length;
    for (let i = 0; i < nrNodes; ++i) {
      let dequeued = queue.shift()!;
      if (!dequeued.left && !dequeued.right) return depth;
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  return depth;
}
