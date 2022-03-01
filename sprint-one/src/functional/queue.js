var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storage.head === undefined) {
      storage.head = 0;
      storage.tail = -1;
      storage.length = 0;
    }
    storage.tail++;
    storage[storage.tail] = value;
    storage.length++;
  };

  someInstance.dequeue = function() {
    if (storage.head <= storage.length) {
      storage.head++;
      storage.length--;
      return storage[storage.head - 1];
    }
  };

  someInstance.size = function() {
    return storage.head !== undefined ? storage.length : 0;
  };

  return someInstance;
};
