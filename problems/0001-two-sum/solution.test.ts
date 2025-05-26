import { twoSum } from './solution';
describe('twoSum', () => {
    test('should return indices for basic case', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should work with different positions', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle mix of positive and negative numbers', () => {
        const nums = [-3, 4, 3, 90];
        const target = 0;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 2]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle zero values', () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 3]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle large numbers', () => {
        const nums = [1000000, 2000000, 3000000];
        const target = 3000000;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should throw error when no solution exists', () => {
        const nums = [1, 2, 3];
        const target = 10;
        expect(() => twoSum(nums, target)).toThrow("No two sum solution");
    });

    test('should return first valid pair when multiple solutions exist', () => {
        const nums = [1, 2, 3, 4, 5];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 3]);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });
});