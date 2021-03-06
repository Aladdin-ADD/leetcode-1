/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  if (!head.next.next.next) {
    head.next.next.next = head.next;
    head.next = head.next.next;
    head.next.next.next = null;
    return head;
  }

  var oddList = new ListNode(null);
  var oddHead = oddList;
  var evenList = new ListNode(null);
  var evenHead = evenList;
  var init = 1;
  while (head) {
    if (init % 2 === 0) {
      evenList.next = head;
      evenList = evenList.next;
    } else {
      oddList.next = head;
      oddList = oddList.next;
    }
    ++init;
    head = head.next;
  }
  
  evenList.next = null;
  oddList.next = evenHead.next;

  return oddHead.next;
};
