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
  // if (this.root === null) {
  //   this.root = newNode;
  //   return this;
  // } else {
  //   var current = this.root;
  //   while (true) {
  //     if (value === current.value) {
  //       return undefined;
  //     }
  //     if (value < current.value) {
  //       if (current.left === null) {
  //         current.left = newNode;
  //         return this;
  //       } else {
  //         current = current.left;
  //       }
  //     } else if (value > current.value) {
  //       if (current.right === null) {
  //         current.right = newNode;
  //         return this;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //   }
  // }
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
 */
