// task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(val) {
    this.items.unshift(val);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty ! So , Dequeue Not Possible";
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

function addedJob(jobs) {
  const q = new Queue();

  for (let job of jobs) {
    q.enqueue(job);
  }

  while (!q.isEmpty()) {
    const currJob = q.dequeue();
    console.log(`Processing Jobs is : ${currJob}`);
  }
}

const jobs = ["Playing Football", "Playing Cricket", "Study", "Travel"];
addedJob(jobs);
