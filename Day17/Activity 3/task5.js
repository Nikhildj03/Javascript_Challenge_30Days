// Activty 3 : Queue

// Task 5 Implement a Queue class with methods enquene(add Element) , dequeue (remove element), and front (view the first element)


class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    enqueue(val){
        this.items.unshift(val);
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty ! So , Dequeue Not Possible'
        }
        return this.items.pop();
    }

    size(){
        return this.items.length;
    }

    peek(){
        return this.items[this.items.length-1];
    }
}

const queue = new Queue(1);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);
console.log(`Removing Element : ${queue.dequeue()}`);
console.log(`Size of the Queue is : ${queue.size()}`);
console.log(`Is Queue Empty : ${queue.isEmpty()}`);
console.log(`Peek Element of the Queue is : ${queue.peek()}`);
