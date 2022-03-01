var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.tail = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.tail] = value;
  this.tail++;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.head < this.tail) {
    this.head++;
    this.length--;
    return this[this.head - 1];
  }
};

Queue.prototype.size = function() {
  return this.length;
};
