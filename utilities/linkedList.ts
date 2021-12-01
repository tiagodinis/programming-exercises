export type lNode = ListNode | null;

export class ListNode {
  val: number;
  next: lNode;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList(arr: number[]) {
  let dummy: lNode = new ListNode();
  let current: lNode = dummy;

  for (let i = 0; i < arr.length; ++i, current = current.next)
    current.next = new ListNode(arr[i]);

  return dummy.next;
}

export function printLinkedList(head: lNode) {
  for (; head; head = head.next)
    console.log(head.val + " -> " + head.next?.val);
}
