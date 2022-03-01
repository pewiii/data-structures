var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.head === undefined) {
      this.head = 0;
      this.tail = -1;
      this.length = 0;
    }
    this.tail++;
    this[this.tail] = value;
    this.length++;
  },
  dequeue: function() {
    if (this.head <= this.tail) {
      this.length--;
      this.head++;
      return this[this.head - 1];
    }
  },
  size: function() {
    return this.head !== undefined ? this.length : 0;
  }
};


