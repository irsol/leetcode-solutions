import { addTwoNumbers } from './solution';
import { buildList, listToArray } from '../../utils/ListNode';

describe('addTwoNumbers', () => {
    it('should add [2,4,3] and [5,6,4] to get [7,0,8]', () => {
        const l1 = buildList([2, 4, 3]);
        const l2 = buildList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    it('should add [0] and [0] to get [0]', () => {
        const l1 = buildList([0]);
        const l2 = buildList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });

    it('should handle different lengths like [9,9,9,9] + [9,9,9]', () => {
        const l1 = buildList([9, 9, 9, 9]);
        const l2 = buildList([9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 9, 9, 0, 1]);
    });
});

