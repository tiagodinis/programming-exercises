export type btNode = BinaryTreeNode | null;

export class BinaryTreeNode {
  val: number;
  left: btNode;
  right: btNode;
  constructor(val?: number, left?: btNode, right?: btNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// export function createBinaryTree(arr: number[]) {
//   for (let i = 0; i < arr.length; i += 3) {}
// }
