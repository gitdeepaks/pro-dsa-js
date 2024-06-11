const { which } = require("bun");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
// Insert At Begning
LinkedList.prototype.inserAtBegning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};
// Insert at End
LinkedList.prototype.inserAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

// Insert at Given Node

LinkedList.prototype.inserAfterGivenNode = function (prevNode, data) {
  if (!prevNode) {
    console.log("PrevNode cannot be null");

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }
};

// Delete a node in LinkdList

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

// Delete Last Node

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; //nothing to delete
  }

  if (!this.head.next) {
    this.head = null; //if there is only one Node
    return;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  // if list is empty
  if (this.head) {
    console.log("list is empty");
    return;
  }
  // data found at head
  if (this.head === key) {
    this.head = this.head.next;
    return;
  }

  let currVal = this.head;

  while (currVal.next !== null) {
    if (currVal.next.data === key) {
      currVal.next = currVal.next.next;
      return;
    }
    currVal = currVal.next;
  }
  console.log("No node found with key");
};

//search oparation
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }
  return false;
};

//traversal
LinkedList.prototype.printList = function () {
  let current = this.head;

  let listVal = [];

  while (current) {
    listVal.push(current.data);
    current = current.next; // moved to next node
  }
  console.log(listVal.join(" -> "));
};

//reverse a link list

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  //   appointing new head

  this.head = prev;
};
