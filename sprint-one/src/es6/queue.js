class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  enqueue(value) {
    this[this.tail] = value;
    this.tail++;
    this.length++;
  }

  dequeue() {
    if (this.head < this.tail) {
      this.head++;
      this.length--;
      return this[this.head - 1];
    }
  }

  size() {
    return this.length;
  }
}
