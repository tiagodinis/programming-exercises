type lNode = ListNode | null;

class ListNode {
  val: number;
  next: lNode;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Iterative
function reverseLinkedList(head: lNode): lNode {
  let prev: lNode = null;
  while (head) {
    let temp: lNode = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}

// Functional
function reverseLinkedListFunc(head: lNode): lNode {
  if (head === null || head.next === null) return head;

  let newHead: lNode = reverseLinkedListFunc(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
