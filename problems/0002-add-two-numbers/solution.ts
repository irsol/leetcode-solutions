import { ListNode } from '../../utils/ListNode';

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers
// Runtime 2 ms
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Handle edge cases
    if (!l1 && !l2) return new ListNode(0);
    if (!l1) return l2;
    if (!l2) return l1;

    let startNode = new ListNode(0);
    let current = startNode;
    let carryOver = 0;

    // Continue while we have digits or carryOver
    while (l1 || l2 || carryOver) {
        let sum = carryOver;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        // Update carryOver, create new node
        carryOver = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    };

    return startNode.next;
};
