

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._capacity = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  var added = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = [k, v];
      added = true;
    }
  }
  if (!added) {
    this._storage[index].push([k, v]);
  }
  this._capacity++;
  if (this._capacity / this._limit >= .75) {
    var newLimit = this._limit * 2;
    this.resize(newLimit);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].shift(i);
        this._capacity--;
      }
    }
  }

  if (this._capacity / this._limit < .25) {
    var newLimit = Math.floor(this._limit / 2);
    this.resize(newLimit);
  }
};

HashTable.prototype.resize = function(newLimit) {
  var _oldLimit = this._limit;
  var _oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < _oldLimit; i++) {
    var bucket = _oldStorage[i];
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        var index = getIndexBelowMaxForKey(bucket[j][0], this._limit);
        if (!this._storage[index]) {
          this._storage[index] = [];
        }
        this._storage[index].push([bucket[j][0], bucket[j][1]]);
      }
    }
  }
  return this._storage;




  // for (var i = 0; i < _oldLimit; i++) {
  //   var bucket = _oldStorage[i];
  //   if (bucket) {
  //     for (var j = 0; j < bucket.length; j++) {
  //       var index = getIndexBelowMaxForKey(bucket[j][0], this._limit);
  //       if (!this._storage[index]) {
  //         this._storage[index] = [];
  //       }
  //       this._storage[index].push([bucket[j][0], bucket[j][1]]);
  //     }
  //   }
  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert = constant
 * retreive = constant
 * remove = constant
 *
 */

