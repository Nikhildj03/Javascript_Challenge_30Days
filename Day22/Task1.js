/ * Activity 1: Add Two Numbers */;

//* Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// -> Write a function that takes two non-empty linked lists representing two non-negative integer. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// -> Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse Linked List
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Function to add two numbers
function addTwoNumbers(l1, l2) {
  // Step 1: Reverse both linked lists
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  // Step 2: Add the two numbers
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  // Step 3: Reverse the resultant linked list
  return reverseList(dummyHead.next);
}

// Function to print linked list
function printLinkedList(list) {
  let result = "";
  while (list !== null) {
    result += list.val;
    if (list.next !== null) {
      result += " -> ";
    }
    list = list.next;
  }
  console.log(result);
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: 8 -> 0 -> 7
