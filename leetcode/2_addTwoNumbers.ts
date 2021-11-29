// Problem: https://leetcode.com/problems/add-two-numbers/

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy: ListNode = new ListNode();
  let current: ListNode = dummy;
  let val: number;
  let carry: number = 0;

  while (l1 || l2 || carry) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val > 9 ? 1 : 0;
    if (carry) val -= 10;
    current.next = new ListNode(val);

    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
