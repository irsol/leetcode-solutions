import { isPalindrome } from "./solution";
describe('isPalindrome', () => {
    test('should return true for single digit numbers', () => {
        expect(isPalindrome(0)).toBe(true);
        expect(isPalindrome(7)).toBe(true);
        expect(isPalindrome(9)).toBe(true);
    });
    test('should return true for palindromic numbers', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(12321)).toBe(true);
        expect(isPalindrome(1221)).toBe(true);
        expect(isPalindrome(11)).toBe(true);
    });
    test('should return false for non palindromic numbers', () => {
        expect(isPalindrome(10)).toBe(false);
        expect(isPalindrome(123)).toBe(false);
        expect(isPalindrome(1234)).toBe(false);
        expect(isPalindrome(12)).toBe(false);
    });
    test('should return false for negative numbers', () => {
        expect(isPalindrome(-121)).toBe(false);
        expect(isPalindrome(-1)).toBe(false);
    });
    test('should handle large palindromic numbers', () => {
        expect(isPalindrome(123454321)).toBe(true);
    });
    test('should handle edge cases', () => {
        expect(isPalindrome(0)).toBe(true);
        expect(isPalindrome(100)).toBe(false);
        expect(isPalindrome(1000021)).toBe(false);
    });
});