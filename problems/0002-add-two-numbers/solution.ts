import { ListNode } from '../../utils/ListNode';

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let startNode = new ListNode(0);
    let current = startNode;
    let carryOver = 0;

    while (l1 || l2 || carryOver) {
        const value1 = l1?.val ?? 0;
        const value2 = l2?.val ?? 0;
        const sum = value1 + value2 + carryOver;

        carryOver = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    };

    return startNode.next;
};
