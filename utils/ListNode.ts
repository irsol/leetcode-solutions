export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    };
};

// Converts an array into a linked list
export function buildList(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    };

    return head;
};

// Converts a linked list into an array
export function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];

    while (head !== null) {
        result.push(head.val);
        head = head.next;
    };

    return result;
};
