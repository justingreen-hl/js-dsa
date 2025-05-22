// Singly linked list
// each node points to the next node and the last node points to null

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const myList = new LinkedList();
myList.push("value 1");
myList.push("value 2");
console.log(myList)