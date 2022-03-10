var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  Object.setPrototypeOf(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var childNode = function(tree) {
    if (tree.value === target) {
      return true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (childNode(tree.children[i])) {
        return true;
      }
    }
    return false;
  };
  return childNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
