var BinarySearchTree = function(value) {
  var node = Object.create(binaryTreeMethods);
  node.root = null;
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var helper = function(tree) {
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = newNode;
      } else {
        helper(tree.left);
      }
    } else if (value > tree.value) {
      if (tree.right === null) {
        tree.right = newNode;
      } else {
        helper(tree.right);
      }
    }
  };
  helper(this);
};

binaryTreeMethods.contains = function(value) {
  if (this.value !== value && this.left === null && this.right === null) {
    return false;
  }
  var current = this;
  var found = false;
  while (!found && current) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      found = true;
    }
  }
  return found;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  var helper = function(tree) {
    callback(tree.value);
    if (tree.left !== null) {
      helper(tree.left);
    }
    if (tree.right !== null) {
      helper(tree.right);
    }
  };
  helper(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert = O(log n)
 * contains = O(log n)
 * depthFirstLog = linear
 *
 */
