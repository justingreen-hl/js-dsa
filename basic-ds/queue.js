// FIFO = First in first out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push
  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  // pop but from the beginning of the queue
  dequeue() {
    if(!this.first) return null;

    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const myQueue = new Queue;

myQueue.enqueue("Value 1");
myQueue.enqueue("Value 2");
myQueue.enqueue("Value 3");
myQueue.dequeue();

console.log(myQueue)