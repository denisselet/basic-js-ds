const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


 function removeKFromList(l, k) {
let list = l
 let del = list
//  let current = this.head;
//  let index = 0;
 while (del.next) {
   if (del.next.value === k) {


    del.next = del.next.next
    //  del = index
    continue
   } 
   del = del.next;
  //  index++;
 }
 if (list.value === k) {
   list = list.next
  }
return list
}








 




module.exports = {
  removeKFromList
};
