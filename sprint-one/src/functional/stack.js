var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (!storage.length) {
      storage.length = 1;
    } else {
      storage.length++;
    }
    storage[storage.length - 1] = value;
  };

  someInstance.pop = function() {
    if (storage.length > 0) {
      storage.length--;
      var temp = storage[storage.length];
      delete storage[storage.length];
      return temp;
    }
  };

  someInstance.size = function() {
    return storage.length ? storage.length : 0;
  };

  return someInstance;
};
