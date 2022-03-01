var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    if (!this.length) {
      this.length = 0;
    }
    this.length++;
    this[this.length - 1] = value;
  },
  pop: function() {
    if (this.length) {
      this.length--;
      return this[this.length];
    }
  },
  size: function() {
    return this.length ? this.length : 0;
  }
};


