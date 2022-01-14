// Problem: https://leetcode.com/problems/univalued-binary-tree/

import { btNode } from "../utilities/binaryTree";

function isUnivalTreeDFS(root: btNode): boolean {
  if (!root) return true;
  if (root.left && root.left.val !== root.val) return false;
  if (root.right && root.right.val !== root.val) return false;
  return isUnivalTreeDFS(root.left) && isUnivalTreeDFS(root.right);
}

function isUnivalTreeBFS(root: btNode): boolean {
  if (!root) return true;
  const rootVal = root.val;
  let queue = [root];

  while (queue.length) {
    let nrLevelNodes = queue.length;
    for (let i = 0; i < nrLevelNodes; i++) {
      let dequeued = queue.shift()!;
      if (dequeued.left) {
        if (dequeued.left.val !== rootVal) return false;
        queue.push(dequeued.left);
      }
      if (dequeued.right) {
        if (dequeued.right.val !== rootVal) return false;
        queue.push(dequeued.right);
      }
    }
  }

  return true;
}
