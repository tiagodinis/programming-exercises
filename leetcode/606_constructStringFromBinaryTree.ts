// Problem: https://leetcode.com/problems/construct-string-from-binary-tree/

import { btNode } from "../utilities/binaryTree";

function tree2str(root: btNode): string {
  if (!root) return "";

  let res = root.val.toString();
  if (root.left) res += `(${tree2str(root.left)})`;
  else if (root.right) res += "()";
  if (root.right) res += `(${tree2str(root.right)})`;

  return res;
}
