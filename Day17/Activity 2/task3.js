// Activity 2 Stack

// Task 3. Implement a Stack class with methods push (add Element) , pop(remove element) , and peek (veiw the top element).

class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack is Empty ! So , Pop Not Possible'
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is Empty ! So , Peek Not Possible'
        }
        return this.items[this.items.length -1 ];
    }

    isEmpty(){
       return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}

const st1 = new Stack();
st1.push(1);
st1.push(2);
st1.push(3);
st1.push(4);


console.log(st1);
console.log(`Remove Element is : ${st1.pop()}`);

console.log(`Peek Element is : ${st1.peek()}`);
console.log(`Size of the Stack is : ${st1.size()}`);
console.log(`Is Stack Empty : ${st1.isEmpty()}`);

