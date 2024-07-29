// Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty ! So , Pop Not Possible";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty ! So , Peek Not Possible";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseString(str) {
  let st2 = new Stack();

  for (let ch of str) {
    st2.push(ch);
  }

  let ans = "";
  while (!st2.isEmpty()) {
    ans += st2.pop();
  }
  return ans;
}

const originalString = "Kartik";
console.log(`Original String is : ${originalString}`);
console.log(`Reverse String is : ${reverseString(originalString)}`);
