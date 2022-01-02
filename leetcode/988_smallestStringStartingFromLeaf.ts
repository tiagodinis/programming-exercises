// Problem: https://leetcode.com/problems/smallest-string-starting-from-leaf/

import { btNode } from "../utilities/binaryTree";

const charMap: { [key: string]: string } = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};

function smallestFromLeaf(root: btNode): string {
  return pathComparer(root, "");
}

function pathComparer(root: btNode, path: string): string {
  if (!root) return path;

  let newPath = charMap[root.val.toString()] + path;
  let l = pathComparer(root.left, newPath);
  let r = pathComparer(root.right, newPath);

  if (!root.left && root.right) return r;
  else if (root.left && !root.right) return l;
  else return l < r ? l : r;
}
