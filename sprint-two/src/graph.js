// Instantiate a new graph
var Graph = function () {
  this.adjacencyList = {};


  // Add a node to the graph, passing in the node's value.
  Graph.prototype.addNode = function (node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  };

  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function (node) {
    var vertex = node.toString();
    for (var key in this.adjacencyList) {
      if (key === vertex) {
        return true;
      }
    }
    return false;
  };
};
// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var key in this.adjacencyList) {
    this.adjacencyList[key] = this.adjacencyList[key].filter(
      v => v !== node
    );
    delete this.adjacencyList[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.contains(fromNode) === false || this.contains(toNode) === false) {
    return false;
  }

  var edge1 = this.adjacencyList[fromNode].includes(toNode);
  var edge2 = this.adjacencyList[toNode].includes(fromNode);
  if (edge1 && edge2) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.adjacencyList[fromNode].push(toNode);
  this.adjacencyList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.adjacencyList[fromNode] = this.adjacencyList[fromNode].filter(
    v => v !== toNode
  );
  this.adjacencyList[toNode] = this.adjacencyList[toNode].filter(
    v => v !== fromNode
  );
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.adjacencyList) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


