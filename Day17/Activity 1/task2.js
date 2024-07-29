// Task 2. Implement a Linklist class with methods to add a node to the end , remove a node from the end, and display all nodes.

class Node{
    constructor(value , next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head =  null;
    }

    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }

    addEnd(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }

    removeLast(){
        if(!this.head){
            return;
        } 
        if(!this.head.next){
            this.head = null
        }
        let curr = this.head;


        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
    }
}

const list1 = new LinkedList();
list1.addEnd(1);
list1.addEnd(2);
list1.addEnd(3);
list1.addEnd(4);

console.log('Original Last is:');
list1.printList();

console.log('List After Removing Last Element is:');
list1.removeLast();
list1.printList();

