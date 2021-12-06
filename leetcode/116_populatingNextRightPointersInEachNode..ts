// Problem: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Problem: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

class NodeWithLeft {
  val: number;
  left: NodeWithLeft | null;
  right: NodeWithLeft | null;
  next: NodeWithLeft | null;
  constructor(
    val?: number,
    left?: NodeWithLeft,
    right?: NodeWithLeft,
    next?: NodeWithLeft
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

type btNode = NodeWithLeft | null;

function connect(root: btNode): btNode {
  let queue: btNode[] = root ? [root] : [];

  while (queue.length) {
    for (let i = 0; i < queue.length - 1; ++i) queue[i]!.next = queue[i + 1]!;
    let nrLevelNodes = queue.length;
    for (let i = 0; i < nrLevelNodes; ++i) {
      let dequeued = queue.shift()!;
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
  }

  return root;
}
