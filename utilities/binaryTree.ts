export type btNode = BinaryTreeNode | null;
export type btNumber = number | null;

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

export function createBinaryTree(arr: btNumber[]): btNode {
  let nodes: btNode[] = [];

  for (let level = 0, nrPrevNodes = 0; nrPrevNodes < arr.length; ++level) {
    let lvlNodes = Math.pow(2, level);
    for (let i = 0; i < lvlNodes; ++i) {
      let val = arr[nrPrevNodes + i];
      let newNode = val ? new BinaryTreeNode(val) : null;
      if (newNode && level) {
        let parent = nrPrevNodes - lvlNodes / 2 + Math.trunc(i / 2);
        nodes[parent]![i % 2 ? "right" : "left"] = newNode;
      }
      nodes.push(newNode);
    }
    nrPrevNodes += lvlNodes;
  }

  return nodes[0];
}
