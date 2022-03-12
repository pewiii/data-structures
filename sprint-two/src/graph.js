// Instantiate a new graph
var Graph = function () {
  this._adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  if (!this._adjacencyList[node]) {
    this._adjacencyList[node] = [];
    this._adjacencyList[node].value = node;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this._adjacencyList.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var key in this._adjacencyList) {
    this._adjacencyList[key] = this._adjacencyList[key].filter(
      v => v !== node
    );
    delete this._adjacencyList[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.contains(fromNode) === false || this.contains(toNode) === false) {
    return false;
  }

  var edge1 = this._adjacencyList[fromNode].includes(toNode);
  var edge2 = this._adjacencyList[toNode].includes(fromNode);
  if (edge1 && edge2) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this._adjacencyList[fromNode].push(toNode);
  this._adjacencyList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this._adjacencyList[fromNode] = this._adjacencyList[fromNode].filter(
    v => v !== toNode
  );
  this._adjacencyList[toNode] = this._adjacencyList[toNode].filter(
    v => v !== fromNode
  );
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this._adjacencyList) {
    cb(this._adjacencyList[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions
 *
 * addNode = Constant
 * contains = Constant
 * remove O(n^2)
 * hasEdge = Linear
 * addEgde = Constant
 * removeEdge = Linear
 * forEachNode = Linear
 *
 */


