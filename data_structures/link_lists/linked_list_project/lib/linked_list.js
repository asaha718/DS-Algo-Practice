// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
    } else {
      this.tail.next = new_node;
    }

    this.length++;
    this.tail = new_node;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    const removedHead = this.head;
    this.head = removedHead.next;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;
    while (current) {
      if (current.value === target) return true;
      current = current.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === index) {
        return current;
      } else {
        count += 1;
      }
      current = current.next;
    }
    return null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const currentNode = this.get(index);

    if (currentNode) {
      currentNode.value = val;
      return true;
    } else {
      return false;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length || index < 0) return false;

    let newNode = new Node(val);

    let prevPos = this.get(index - 1);
    let restOfList = prevPos.next;

    prevPos.next = newNode;
    newNode.next = restOfList;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index>= this.length || index < 0) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.length - 1) return this.removeTail();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
