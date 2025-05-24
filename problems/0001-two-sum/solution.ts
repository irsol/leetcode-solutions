// Two sum
// https://leetcode.com/problems/two-sum
// Runtime 1 ms

export function twoSum(nums: number[], target: number): number[] {
    const numToIndex = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const neededNum = target - currentNum;

        if (numToIndex.has(neededNum)) {
            return [numToIndex.get(neededNum)!, i];
        }

        numToIndex.set(currentNum, i);
    };

    throw new Error("No two sum solution");
};