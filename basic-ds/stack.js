// LIFO = Last in first out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }

  pop() {
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

const myStack = new Stack;
myStack.push("pancake 1");
myStack.push("pancake 2");
myStack.push("pancake 3");
myStack.pop();

console.log(myStack)