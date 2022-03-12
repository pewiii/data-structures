var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var tail = new Node(value);

    if (list.head === null) {
      list.head = tail;
      list.tail = tail;
    } else {
      this.tail.next = tail;
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

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

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