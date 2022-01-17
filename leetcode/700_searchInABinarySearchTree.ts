// Problem: https://leetcode.com/problems/search-in-a-binary-search-tree/

import { btNode } from "../utilities/binaryTree";

function searchBST_DFS(root: btNode, val: number): btNode {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST_DFS(root.left, val) || searchBST_DFS(root.right, val);
}

function searchBST_BFS(root: btNode, val: number): btNode {
  let start = 0;
  let queue = [root];

  while (queue.length - start) {
    let nrLevelNodes = queue.length - start;
    for (let i = 0; i < nrLevelNodes; i++, start++) {
      let dequeued = queue[start]!;
      if (dequeued.val === val) return dequeued;
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  return null;
}
