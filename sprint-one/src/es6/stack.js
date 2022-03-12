class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length) {
      this.length--;
      return this[this.length];
    }
  }

  size() {
    return this.length;
  }
}