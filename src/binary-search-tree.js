const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  red(data) {
    this.rootNode = re(this.rootNode, data);
    function re(node, data) {
      if (node)  {

      } else {
        let nod = new Node(data);
        return nod
      } 
      if (node.data === data) return node;
      if (data < node.data) {
        node.prev = re(node.prev, data);
      } else {
        node.next = re(node.next, data);
      }
      return node;
    }
  }

  search(node, data) {

  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};