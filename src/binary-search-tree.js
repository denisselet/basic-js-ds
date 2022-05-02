const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  arr = [];

  root() {
    if(this.arr.length) {
      let ret =  {data: this.arr[0]}
      return ret
    }
    return null
  }

  add(data) {
    this.arr.push(data);
    return this
  }

  has(data) {
    let ret = this.arr.includes(data)
    return ret
  }

  find(data) {
    let elm = this.arr.find((i) => i === data);
    if(elm) {
      return { data: elm }
    } else {
      return null
    }
  }

  remove(data) {
    this.arr = this.arr.filter((i) =>i != data);
    return this
  }

  min() {
    function getMinOfArray(numArray) {
      return Math.min.apply(null, numArray);
    }
    return getMinOfArray(this.arr)
  }

  max() {
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    return getMaxOfArray(this.arr)
  }
}

module.exports = {
  BinarySearchTree
};