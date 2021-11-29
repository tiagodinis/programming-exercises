// Problem: https://leetcode.com/problems/palindrome-linked-list/

// type lNode = ListNode | null;

// class ListNode {
//   val: number;
//   next: lNode;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function isPalindromeLinkedList(head: lNode): boolean {
  let fast: lNode = head;
  let slow: any = head;

  // Find middle
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse second half
  let prev: lNode = null;
  let next: lNode;
  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Check palindrome
  let left: any = head;
  let right: lNode = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}
