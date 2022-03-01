var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.head === undefined) {
      this.head = 0;
      this.tail = 0;
      this.length = 0;
    }
    this[this.tail] = value;
    this.tail++;
    this.length++;
  },
  dequeue: function() {
    if (this.head < this.tail) {
      this.head++;
      this.length--;
      return this[this.head - 1];
    }
  },
  size: function() {
    return this.length ? this.length : 0;
  }
};


