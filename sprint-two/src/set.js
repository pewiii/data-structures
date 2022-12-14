var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var key = JSON.stringify(item);
  this._storage[key] = item;
};

setPrototype.contains = function(item) {
  var key = JSON.stringify(item);
  return this._storage[key] !== undefined;
};

setPrototype.remove = function(item) {
  var key = JSON.stringify(item);
  delete this._storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add = constant
 * contains = constant
 * remove = constant
 */
