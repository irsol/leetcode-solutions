// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime 7ms

export function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set<string>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        };

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    };

    return maxLength;
};