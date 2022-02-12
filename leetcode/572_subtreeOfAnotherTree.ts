// Problem: https://leetcode.com/problems/subtree-of-another-tree/

import { btNode } from "../utilities/binaryTree";
import { isSameTree } from "./100_sameTree";

function isSubtree(root: btNode, subRoot: btNode): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
