var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function (value) {
    var tail = new Node(value);

    if (list.head === null) {
      list.head = tail;
      list.tail = tail;
    } else {
      this.tail.next = tail;
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;

    }
    return tail;

  };

  list.removeHead = function () {
    var node;
    if (this.head) {
      node = this.head;
      this.head = this.head.next;
    }
    return node.value;
  };

  list.contains = function (target) {
    var current;
    current = this.head;
    while (current && current.value !== target) {
      current = current.next;

    }
    if (current && current.value === target) {
      return true;
    } else {
      return false;
    }
  };

  list.addToHead = function (value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return list;
  };

  list.removeTail = function() {
    // if (this.length === 0) {
    //   return undefined;
    // }
    // var current = this.tail;
    // if (this.length === 1) {
    //   this.head = null;
    //   this.tail = null;
    // } else {
    //   this.tail = current.prev;
    //   this.tail.next = null;
    //   current.prev = null;
    // }
    // this.length--;
    // return current.value;
    if (this.tail.prev === null) {
      this.tail.value = null;
    }
    if (this.tail.prev !== null) {
      this.tail = this.tail.prev;
    }
    if (this.tail.next !== null) {
      this.tail.next = null;
      this.length--;
    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail = Constant
 * removeHead = Constant
 * contains = linear
 *
 *
 */
// var linkedOne = new LinkedList();
// linkedOne.addToTail(100);
// linkedOne.addToTail(200);
// console.log(linkedOne.tail.value);