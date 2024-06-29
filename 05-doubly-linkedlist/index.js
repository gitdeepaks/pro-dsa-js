class Node {
  constructor(data, next = null, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBigning = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
    // this.head = newNode;
  }

  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};

// Insert element in the end of doubly LL

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAfter = function (prev, data) {
  if (prevNode == null) {
    console.log("Invalid prevNode");
    return;
  }
  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.newNode.prev = newNode;
  }
  prevNode.next = newNode;

  // tail
  if (newNode.next == null) {
    this.tail = newNode;
  }
};

// Delete first node
DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

// delete a last node

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    console.log("DLL is Empty");
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// reverse a doubly LL

DoublyLinkedList.prototype.reverseDoublyLL = function () {
  let current = this.head;
  let temp = null;

  while (current !== null) {
    //swap
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to next node
    current = current.prev;
  }

  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
