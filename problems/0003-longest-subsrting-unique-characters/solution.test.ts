import { lengthOfLongestSubstring } from './solution';
describe('lengthOfLongestSubstring', () => {
    it('returns 3 for "abcabcbb"', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });

    it('returns 1 for "bbbbb"', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });

    it('returns 3 for "pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    it('returns 0 for an empty string', () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });

    it('returns 5 for "tmmzuxt"', () => {
        expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5);
    });

    it('returns 10 for a string with all unique characters', () => {
        expect(lengthOfLongestSubstring("abcdefghij")).toBe(10);
    });

    it('handles repeated characters in the middle', () => {
        expect(lengthOfLongestSubstring("dvdf")).toBe(3);
    });
});