import { ListNode } from '../../utils/ListNode';

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers
// This recursive solution works good on smaller lists. It's slower vs simple loop.
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carryOver: number = 0): ListNode | null {
    if (!l1 && !l2 && !carryOver) {
        return null;
    };

    const value1 = l1 ? l1?.val : 0;
    const value2 = l2 ? l2?.val : 0;
    const sum = value1 + value2 + carryOver;

    const node = new ListNode(sum % 10);

    const l1Next = l1 ? l1.next : null;
    const l2Next = l2 ? l2.next : null;

    // Only recurse if there are more digits or a carry
    if (l1Next || l2Next || Math.floor(sum / 10) > 0) {
        node.next = addTwoNumbers(l1Next, l2Next, Math.floor(sum / 10))
    }
    return node;
}