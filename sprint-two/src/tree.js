var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  Object.setPrototypeOf(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  tree.parent = this;
  this.children.push(tree);
};

treeMethods.contains = function(target, returnNode) {
  var result;
  var result2;
  var childNode = function(tree) {
    if (tree.value === target) {
      result = tree;
      return true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (childNode(tree.children[i])) {
        return true;
      }
    }
    return false;
  };
  result2 = childNode(this);
  if (returnNode) {
    return result;
  } else {
    return result2;
  }
};

treeMethods.removeFromParent = function(value) {
  var node = this.contains(value, true);
  var parent = node.parent;
  node.parent = null;
  var index = parent.children.indexOf(node);
  parent.children = parent.children.shift(index);

  return parent.value;
};

treeMethods.traverse = function(callback) {
  var childNode = function(tree) {
    tree.value = callback(tree.value);
    for (var i = 0; i < tree.children.length; i++) {
      if (childNode(tree.children[i])) {
        childNode(tree.children[i]);
      }
    }
  };
  childNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?

  addChild = constant;
  contains = linear;


 */
