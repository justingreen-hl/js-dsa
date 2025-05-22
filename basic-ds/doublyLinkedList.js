// Doubly linked list
// each node has two links, one to the previous node and one to the next node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if(this.head === null) return true;
    return false;
  }

  push(val) {
    let temp = new Node(val);

    if(this.head == null) {
      this.head = temp;
      this.tail = temp;
    }
    else {
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
  }

  display() {
    if(!this.isEmpty()) {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

const dll = new DoublyLinkedList();

dll.push(10);
dll.push(11);
dll.push(12);
dll.display();