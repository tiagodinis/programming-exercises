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
  if (arr.length === 0 || arr[0] === null) return null;

  let root = new BinaryTreeNode(arr[0]);
  let queue = [root];

  function createNode(n: btNumber) {
    let node = n === null || n === undefined ? null : new BinaryTreeNode(n);
    if (node) queue.push(node);
    return node;
  }

  for (let i = 1; i < arr.length && queue.length; ) {
    let dequeued = queue.shift()!;
    dequeued.left = createNode(arr[i++]);
    dequeued.right = createNode(arr[i++]);
  }

  return root;
}
