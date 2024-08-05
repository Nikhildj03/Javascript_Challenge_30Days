/*
Activity-2[Merge k sorted Lists]
Task-2:Solve the "Merge k Sorted Lists" problem on Leetcode.
Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
Create a few test cases with linked lists and log the merged list.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function mergeKLists(lists) {
  const minHeap = [];

  for (let list of lists) {
    if (list) {
      minHeap.push(list);
    }
  }

  // Helper function to maintain the heap property
  function heapify() {
    minHeap.sort((a, b) => a.val - b.val);
  }

  heapify();

  let dummy = new ListNode(0);
  let current = dummy;

  while (minHeap.length > 0) {
    let node = minHeap.shift();
    current.next = node;
    current = current.next;

    if (node.next) {
      minHeap.push(node.next);
      heapify();
    }
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);

let mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList);
//output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Additional test cases
let list4 = createLinkedList([]);
let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);

mergedList = mergeKLists([list4, list5, list6]);
printLinkedList(mergedList);
//output: 1

mergedList = mergeKLists([]);
printLinkedList(mergedList);
//output: (prints nothing, as the merged list is empty)
