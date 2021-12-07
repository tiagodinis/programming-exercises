// Problem: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Could just use 236 general solution

import { btNode } from "../utilities/binaryTree";

function lowestCommonAncestor(root: btNode, p: btNode, q: btNode): btNode {
  if (!root) return null;
  if (root.val < p!.val && root!.val < q!.val)
    return lowestCommonAncestor(root.right, p, q);
  if (root.val > p!.val && root.val > q!.val)
    return lowestCommonAncestor(root.left, p, q);
  return root;
}
