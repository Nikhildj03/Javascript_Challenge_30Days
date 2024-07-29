// Activity 1: Linked list

// Task 1:  Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printNode() {
    return `${this.value} , ${this.next ? this.next.value : null}`;
  }
}

let firstNode = new Node(1);
let secondNode = new Node(2);

firstNode.next = secondNode;

console.log(`First Linked List is : ${firstNode.printNode()}`);
console.log(`Second Linked List is : ${secondNode.printNode()}`);
